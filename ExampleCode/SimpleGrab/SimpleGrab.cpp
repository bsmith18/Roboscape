// SimpleGrab.cpp
/*	This program is based off the sample program provided in the pylon Samples folder
 *	upon install and a sample file on the getting started with pylon and cv guide. 
 */

// Include files to use the PYLON API
#include <pylon/PylonIncludes.h>
#include <opencv2/highgui/highgui.hpp>
#include <opencv2/core/core.hpp>
#include <opencv2/video/video.hpp>

// Namespace for using pylon objects.
using namespace Pylon;

// Namespace for using cout.
using namespace std;

// Namespace for cv.
using namespace cv;

// Number of images to be grabbed.
static const uint32_t c_countOfImagesToGrab = 1000;

int main(int argc, char* arv[])
{
	Pylon::PylonAutoInitTerm autoInitTerm;

	
	try
	{
		// Create an instant camera object with the camera device found first.
		CInstantCamera camera(CTlFactory::GetInstance().CreateFirstDevice());

		// Print the model name of the camera.
		cout << "Using device " << camera.GetDeviceInfo().GetModelName() << endl;
	
		GenApi::INodeMap& nodemap= camera.GetNodeMap();
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
		double d = GenApi::CFloatPtr(nodemap.GetNode("ResultingFrameRate"))->GetValue();
		cout << "Frame Rate " << d << endl;

		//Start grabbing of images.
		camera.StartGrabbing(c_countOfImagesToGrab, GrabStrategy_LatestImageOnly);

		// This smart pointer will receive the grab result data.
		CGrabResultPtr ptrGrabResult;

		int numImages = 0;

		while(camera.IsGrabbing())
		{
			camera.RetrieveResult(5000, ptrGrabResult, TimeoutHandling_ThrowException);

			if(ptrGrabResult->GrabSucceeded())
			{
				formatConverter.Convert(pylonImage,ptrGrabResult);
				if(numImages<c_countOfImagesToGrab)
				{
					cvImage[numImages] = cv::Mat(ptrGrabResult->GetHeight(),ptrGrabResult->GetWidth(), CV_8UC3, (uint8_t *)pylonImage.GetBuffer());
				cout << "here" << endl;
				}
			}
			numImages++;
		}
		for(int i=0; i<sizeof(cvImage)/sizeof(Mat); i++)
		{
			namedWindow("Image", WINDOW_NORMAL);
			imshow("Image",cvImage[i]);
			waitKey(0);
			destroyWindow("Image");
			if (i>0)
			{
				cout << cvImage[i]-cvImage[i-1] << endl;
			}
		}
	}
	catch (const GenericException &e)
	{
		// Error handling.
		cerr << "An exception occurred." << endl
		<< e.GetDescription() << endl;
		return 1;	
	}
	
	// Comment the following two lines to disable waiting on exit.
	cerr << endl << "Press Enter to exit." << endl;
	while(cin.get() != '\n');

	// Releases all pylon resources.
	PylonTerminate();

	return 0;
}

