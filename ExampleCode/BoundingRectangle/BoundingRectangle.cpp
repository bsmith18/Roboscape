// BoundingRectangle.cpp

#include "../../Include/roboscape.h"

const static int countOfImages = 50;
const static int imagesPerBurst = 14;
const static int thresholdValue = 250;
static deque<Mat> cvQueue;

int64_t getCameraTimestamp(INodeMap& nodemap)
{
	CCommandPtr(nodemap.GetNode("TimestampLatch"))->Execute();
	return CIntegerPtr(nodemap.GetNode("TimestampLatchValue"))->GetValue();
}

class CSampleImageEventHandler : public CImageEventHandler
{
	public:
		virtual void OnImageGrabbed( CInstantCamera& camera, const CGrabResultPtr& ptrGrabResult)
	{

		//CImageFormatConverter formatConverter;
		//formatConverter.OutputPixelFormat= PixelType_BGR8packed;
		//CPylonImage pylonImage;
		//Mat cvImage;
		static INIT_TIMER;         

		//formatConverter.Convert(pylonImage,ptrGrabResult);
		//cvImage = Mat(ptrGrabResult->GetHeight(),ptrGrabResult->GetWidth(), CV_8UC3, \
			(uint8_t *)pylonImage.GetBuffer());
		
		
		size_t stride = 0;
		ptrGrabResult->GetStride(stride);
		vector<vector<Point>> contours;
		vector<Vec4i> hierarchy;
					                                                                 
		const uint8_t *pImageBuffer = (uint8_t *) ptrGrabResult->GetBuffer();
		Mat cvImage(cv::Size(ptrGrabResult->GetWidth(), ptrGrabResult->GetHeight()), CV_8UC1, (void*)pImageBuffer, stride);
		GaussianBlur(cvImage, cvImage, Size(5, 5), 0, 0);
		threshold(cvImage, cvImage, 100, 255, 0);
		//Canny(cvImage,cvImage, thresholdValue, thresholdValue*3, 3);
		findContours(cvImage, contours, hierarchy, RETR_TREE, CHAIN_APPROX_SIMPLE, Point(0,0));
		Mat drawing = Mat::zeros( cvImage.size(), CV_8UC3 );
		for( int i = 0; i< contours.size(); i++ )
		{
			Scalar color = Scalar(255, 0, 0);
			if(contourArea(contours[i]) > 600000)
			{
				drawContours(drawing, contours, i, color, 4);
				cout << boundingRect(contours[i]) << endl;
				rectangle(drawing, boundingRect(contours[i]), Scalar(0, 255, 0));
			}
		}

		cvQueue.push_back(drawing.clone());
			
	   	//STOP_TIMER("aquire");
	  	START_TIMER;
	}
};

int main(int argc, char* argv[])
{
	int exitCode = 0;
	
	PylonInitialize();
	
	try
	{
		CInstantCamera camera(CTlFactory::GetInstance().CreateFirstDevice());
		camera.Open();
		INodeMap& nodemap= camera.GetNodeMap();
		cout << "Using device " << camera.GetDeviceInfo().GetModelName() << endl;
		
		// Configure the camera
		CIntegerPtr(nodemap.GetNode("Width"))->SetValue(1216);
		CIntegerPtr(nodemap.GetNode("Width"))->SetValue(1216);
		CBooleanPtr(nodemap.GetNode("CenterX"))->SetValue(true);
		CBooleanPtr(nodemap.GetNode("CenterY"))->SetValue(true);
		//CBooleanPtr(nodemap.GetNode("ChunkModeActive"))->SetValue(true);
		//CEnumerationPtr(nodemap.GetNode("ChunkSelector"))->FromString("Timestamp");
		//CBooleanPtr(nodemap.GetNode("ChunkEnable"))->SetValue(true);
		
		camera.RegisterImageEventHandler( new CSampleImageEventHandler, RegistrationMode_Append, Cleanup_Delete);
		
		camera.StartGrabbing(countOfImages, GrabStrategy_LatestImageOnly, GrabLoop_ProvidedByInstantCamera);
		
		while(camera.IsGrabbing())
		{
			int numSent = 0;
			while(numSent < countOfImages)
			{
				usleep(2500);
				numSent++;
			}
			camera.StopGrabbing();
		}
		while(!cvQueue.empty())
		{
			imshow("Test",cvQueue.front());
			waitKey(1);
			cvQueue.pop_front();
		}
	}
	catch (const GenericException &e)
	{
		cerr << "An exception occurred." << endl
		<< e.GetDescription() << endl;
		exitCode = 1;

		// Remove left over characters from input buffer.
		cin.ignore(cin.rdbuf()->in_avail());
	}
	
	wait_for_Enter();
	PylonTerminate(); 
	return exitCode;
}

