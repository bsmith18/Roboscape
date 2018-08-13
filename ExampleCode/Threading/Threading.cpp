// Threading.cpp
/*	This program introduces a thread that handles images as they come into a queue from the 
 * 	EventHandler.
 */

#include "roboscape.h"

static uint32_t numGrabbed = 0;
static deque<Mat> cvQueue;
// Number of images to be grabbed.
static const uint32_t c_countOfImagesToGrab = 1000;
static const int bufferSize = 100;


// Example of an image event handler.
class CSampleImageEventHandler : public CImageEventHandler
{
	public:
		virtual void OnImageGrabbed( CInstantCamera& camera, const CGrabResultPtr& ptrGrabResult)
    {

		CImageFormatConverter formatConverter;
		formatConverter.OutputPixelFormat= PixelType_BGR8packed;
		CPylonImage pylonImage;
		Mat cvImage;
    	static INIT_TIMER;         

		formatConverter.Convert(pylonImage,ptrGrabResult);
        cvImage = cv::Mat(ptrGrabResult->GetHeight(),ptrGrabResult->GetWidth(), CV_8UC3, \
			(uint8_t *)pylonImage.GetBuffer());

		if(numGrabbed < c_countOfImagesToGrab)
		{cvQueue.push_back(cvImage.clone());}
		numGrabbed++;
		
       	//STOP_TIMER("aquire");
      	START_TIMER;
    }
};

void queue_size_checker()
{
	int timesEmpty = 0;
	while(true)
	{
		if (cvQueue.empty())
		{
			timesEmpty++;
			if(timesEmpty > 500)
			{
				cout << "Queue is empty for 500ms." << endl;
				return;
			}
		}
		else if(cvQueue.size()>bufferSize)
		{	
			timesEmpty = 0;
			cvQueue.erase(cvQueue.begin(),cvQueue.end()-bufferSize);
			//cout << "Queue size now " << cvQueue.size() << endl;
		}
		usleep(1000);
	}
}

int main(int argc, char* arv[])
{
	// The exit code of the sample application.
	int exitCode = 0;

	// Before using any pylon methods, the pylon runtime must be initialized. 
  	PylonInitialize();
	try
	{
		// Create an instant camera object with the camera device found first.
		CInstantCamera camera(CTlFactory::GetInstance().CreateFirstDevice());

		// Print the model name of the camera.
		cout << "Using device " << camera.GetDeviceInfo().GetModelName() << endl;
	
		GenApi::INodeMap& nodemap= camera.GetNodeMap();
		camera.RegisterImageEventHandler( new CSampleImageEventHandler, RegistrationMode_Append, Cleanup_Delete);
		camera.Open();
		GenApi::CIntegerPtr width= nodemap.GetNode("Width");
		GenApi::CIntegerPtr height= nodemap.GetNode("Height");

		camera.MaxNumBuffer = 5;

		CImageFormatConverter formatConverter;
		formatConverter.OutputPixelFormat= PixelType_BGR8packed;
		CPylonImage pylonImage;
		
		// Reduce the resolution to make square image
		GenApi::CIntegerPtr(nodemap.GetNode("Width"))->SetValue(1216);
		GenApi::CIntegerPtr(nodemap.GetNode("Width"))->SetValue(1216);

		// Center x and y pixels
		GenApi::CBooleanPtr(nodemap.GetNode("CenterX"))->SetValue(true);
		GenApi::CBooleanPtr(nodemap.GetNode("CenterY"))->SetValue(true);

		// Set the SensorReadoutMode to fast
		//GenApi::CEnumerationPtr(nodemap.GetNode("SensorReadoutMode"))->FromString("Fast");
		
		// Get the resulting frame rate using the settings
		double d = GenApi::CFloatPtr(nodemap.GetNode("ResultingFrameRate"))->GetValue();
		cout << "Frame Rate " << d << endl;

		//Start grabbing of images.
		camera.StartGrabbing( GrabStrategy_LatestImageOnly , GrabLoop_ProvidedByInstantCamera);

		std::thread sizeChecker (queue_size_checker);

		// Can the camera device be queried whether it is ready to accept the next frame trigger?
	    if (camera.IsGrabbing())
	    {
	    	// Start the grabbing using the grab loop thread, by setting the grabLoopType parameter
	    	// to GrabLoop_ProvidedByInstantCamera. The grab results are delivered to the image event handlers.
	    	// The GrabStrategy_OneByOne default grab strategy is used.
	    	while(numGrabbed<c_countOfImagesToGrab)
	    	{
			cout << "Press ENTER to stop grabbing images" << endl;
			if(cin.get() == '\n')
			{
				break;
			}
			usleep(1000);
	      	}
			cout << '\b' << '\b';
	    }
		int numShow = 0;
		while(!cvQueue.empty())
		{
			imshow("Test",cvQueue.front());
			waitKey(1);
			cvQueue.pop_front();
			cout << numShow << endl;
			numShow++;
			usleep(500000);
		}
		sizeChecker.join();
	}
	catch (const GenericException &e)
  	{
		// Error handling.
		cerr << "An exception occurred." << endl
		<< e.GetDescription() << endl;
		exitCode = 1;

		// Remove left over characters from input buffer.
		cin.ignore(cin.rdbuf()->in_avail());
	}
	
	// Comment the following two lines to disable waiting on exit.
	wait_for_Enter();
	// Releases all pylon resources. 
	PylonTerminate(); 
	return exitCode;
}
