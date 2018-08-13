// EventHandler.cpp
/*	This program is based off the sample program provided in the pylon Samples folder
 *	upon install and a sample file on the getting started with pylon and cv guide. 
 */

// Include files to use the PYLON API
#include <pylon/PylonIncludes.h>
#include <opencv2/highgui/highgui.hpp>
#include <opencv2/core/core.hpp>
#include <opencv2/video/video.hpp>
#include <unistd.h>
#include <opencv2/opencv.hpp>

// Namespace for using pylon objects.
using namespace Pylon;

// Namespace for using cout.
using namespace std;

// Namespace for cv.
using namespace cv;

#include <chrono>

#define TIMING

#ifdef TIMING
#define INIT_TIMER auto start = std::chrono::high_resolution_clock::now();
#define START_TIMER  start = std::chrono::high_resolution_clock::now();
#define STOP_TIMER(name)  std::cout << "RUNTIME of " << name << ": " << \
	std::chrono::duration_cast<std::chrono::microseconds>( \
	std::chrono::high_resolution_clock::now()-start \
	).count() / 1000.f << " ms " << std::endl;

#define GET_TIMER  std::chrono::duration_cast<std::chrono::microseconds>(std::chrono::high_resolution_clock::now()-start).count()
#else
#define INIT_TIMER
#define START_TIMER
#define STOP_TIMER(name)
#define GET_TIMER
#endif

static uint32_t numGrabbed = 0;
static deque<Mat> cvQueue;
// Number of images to be grabbed.
static const uint32_t c_countOfImagesToGrab = 1000;


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
      	//imshow("Test",cvQueue.front());
		//cvQueue.pop();
      	waitKey(1);

      	//cout << "CSampleImageEventHandler::OnImageGrabbed called." << std::endl;
      	//usleep(500000);*/
      	STOP_TIMER("aquire");
      	START_TIMER;
    }
};

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
		
		Mat cvImage[c_countOfImagesToGrab];

		camera.MaxNumBuffer = 5;

		CImageFormatConverter formatConverter;
		formatConverter.OutputPixelFormat= PixelType_BGR8packed;
		CPylonImage pylonImage;
		
		// Reduce the resolution to make square image
		GenApi::CIntegerPtr(nodemap.GetNode("Width"))->SetValue(1216);
		GenApi::CIntegerPtr(nodemap.GetNode("Height"))->SetValue(1216);

		// Center x and y pixels
		GenApi::CBooleanPtr(nodemap.GetNode("CenterX"))->SetValue(true);
		GenApi::CBooleanPtr(nodemap.GetNode("CenterY"))->SetValue(true);

		// Set the SensorReadoutMode to fast
		//GenApi::CEnumerationPtr(nodemap.GetNode("SensorReadoutMode"))->FromString("Fast");
		
		// Get the resulting frame rate using the settings
		//double d = GenApi::CFloatPtr(nodemap.GetNode("ResultingFrameRate"))->GetValue();
		//cout << "Frame Rate " << d << endl;

		//Start grabbing of images.
		camera.StartGrabbing( GrabStrategy_LatestImageOnly , GrabLoop_ProvidedByInstantCamera);

		// Can the camera device be queried whether it is ready to accept the next frame trigger?
	    if (camera.IsGrabbing())
	    {
	    	// Start the grabbing using the grab loop thread, by setting the grabLoopType parameter
	    	// to GrabLoop_ProvidedByInstantCamera. The grab results are delivered to the image event handlers.
	    	// The GrabStrategy_OneByOne default grab strategy is used.
	    	while(numGrabbed<c_countOfImagesToGrab)
	    	{
	      		usleep(1000);
	      	}
	    }
		int numShow = 0;
		while(!cvQueue.empty())
		{
			imshow("Test",cvQueue.front());
			waitKey(1);
			cvQueue.pop_front();
			cout << numShow << endl;
			numShow++;
			//usleep(500000);
		}
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
	cerr << endl << "Press Enter to exit." << endl;
	while(cin.get() != '\n');
	// Releases all pylon resources. 
	PylonTerminate(); 
	return exitCode;
}
