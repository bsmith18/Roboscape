// RoboscapeCamera.cpp
/* Author: Brandon Smith
 *
 * Purpose: Camera code for roboscape infrastructure, particularly the image processing portion.  This 
 * program interfaces with a Basler ace acA1920-150uc camera mounted at approximately 8'7.5" above a 
 * 6' by 6' field where the robots are located.  Goal is to ID and locate each robot in as little time 
 * possible.
 *
 * TODO (updated 6/14/18):
 * - Add algorithm to accurately detect ID patterns
 * - Figure out what rate to take images, potentially limiting the camera to a certain rate so that a
 * 	known frequency can be set on the LEDs for reliable light sampling
 * - Test moving LED to see if path can be traced
 * - Add functionality to create lines between blinks (tracing path of robot)
 * 
 */


// include header file associated with project
#include "../Include/roboscape.h"
#include <list>

// set number of images to grab
int numOfImagesToGrab = 1000;
// set number of images that can exist in the processed queue
int maxNumInQueue = 1000;

// queues and corresponding mutexes for image processing:
// grabbedQueue is for images grabbed from camera and 
// processedQueue is for images that have been processed
static deque<Mat> grabbedQueue;
static deque<Mat> processedQueue;
static mutex grabbedQueueMutex;
static mutex processedQueueMutex;

// some boolean parameters that effect the output and run time 
// of the program
bool done = false;					// signals program is complete
bool findRectangle = true;	// signals that the bounding rectangle needs to be computed
bool verbose = false;				// turns on more comments in output

// global varables used to determine real space coordinates
Rect field;
float cm_per_pixel_x;
float cm_per_pixel_y;

// global timestamp from images
int last_ts = 0;

// list of frames that have blink in them
list<bool> mylist;

int numImages = 0;

// image handler that automatically grabs images from memory when they appear
class CRoboscapeGrabImageHandler : public CImageEventHandler
	{
	public:						
		virtual void OnImageGrabbed( CInstantCamera& camera, const CGrabResultPtr& ptrGrabResult)
		{
			// Image grabbed successfully?
			if (ptrGrabResult->GrabSucceeded())
			{
				/* this block of code is for color images (currently unused)
				CImageFormatConverter formatConverter;
				formatConverter.OutputPixelFormat= PixelType_BGR8packed;
				CPylonImage pylonImage;
				Mat cvImage;         

				formatConverter.Convert(pylonImage,ptrGrabResult);
				cvImage = Mat(ptrGrabResult->GetHeight(),ptrGrabResult->GetWidth(), CV_8UC3, \
				(uint8_t *)pylonImage.GetBuffer());
				*/

				// variables that are necessary to grab mono image
				size_t stride = 0;
				ptrGrabResult->GetStride(stride);
				vector<vector<Point>> contours;
				vector<Vec4i> hierarchy;

				// get the timestamp from the image if it is readable
				CIntegerPtr chunkTimestamp( ptrGrabResult->GetChunkDataNodeMap().GetNode( "ChunkTimestamp"));
				if ( IsReadable( chunkTimestamp))
				{
						int ts = chunkTimestamp->GetValue();
						if(verbose)
							cout << (float)(ts - last_ts)/1000 << endl;
						last_ts = ts;
				}
				
				// grab the image from the image buffer and push to grabbedQueue for the image processor to handle				
				const uint8_t *pImageBuffer = (uint8_t *) ptrGrabResult->GetBuffer();
				Mat cvImage(Size(ptrGrabResult->GetWidth(), ptrGrabResult->GetHeight()), CV_8UC1, (void*)pImageBuffer, stride);
				grabbedQueueMutex.lock();
				grabbedQueue.push_back(cvImage.clone());
				grabbedQueueMutex.unlock();
				//imshow("Live",cvImage);
				//waitKey(1);
			}
			else
			{
				cout << "Error: " << ptrGrabResult->GetErrorCode() << " " << ptrGrabResult->GetErrorDescription() << endl;
			}
		}
	};

void printImages(Mat image1, Mat image2)
{
  Mat matDst(Size(image1.cols+image2.cols, max(image1.rows, image2.rows)), image1.type(), Scalar::all(0));
  Mat matRoi = matDst(Rect(0,0,image1.cols,image2.rows));
  image1.copyTo(matRoi);
  matRoi = matDst(Rect(image1.cols,0,image2.cols,image2.rows));
  image2.copyTo(matRoi);
	namedWindow("Images", CV_WINDOW_AUTOSIZE);
	resizeWindow("Images",(image1.cols+image2.cols)/2,image1.rows/2);  
	imshow("Images",matDst);
	waitKey(0);
	return;
}

// thread that processes images until all the images have been processed
void imageProcessor()
{
	// value to threshold images for LED	
	int thresholdValue = 250;
	while(!done)
	{
		// lock the grabbedQueue to check for image
		grabbedQueueMutex.lock();
		// if there is an image in the queue
		if(!grabbedQueue.empty())
		{
			// vectors that will hold the contours of the 250 and 100 threshold images	
			vector<vector<Point>> contours250;
			vector<vector<Point>> contours100;
			// vector for contour function
			vector<Vec4i> hierarchy;
			// grab image from front of grabbedQueue for image processing
			Mat image = grabbedQueue.front();
			// image variables that will be the thresholded images (threshold value of 250 and 100, respectively)
			Mat image250;
			Mat image100;
			// option to write grabbed images to file
			std::string name = "Images/" + to_string(numImages) + ".jpg";
			vector<int> compression_params;
			compression_params.push_back(CV_IMWRITE_JPEG_QUALITY);
			compression_params.push_back(100);
			imwrite(name, image, compression_params);
			// remove front image from grabbedQueue and give back control
			grabbedQueue.pop_front();
			grabbedQueueMutex.unlock();
			// lock the processedQueue for image processing
			processedQueueMutex.lock();
			GaussianBlur(image, image, Size(5, 5), 0, 0);
			threshold(image, image250, thresholdValue, 254, 0);
			findContours(image250, contours250, hierarchy, RETR_TREE, CHAIN_APPROX_SIMPLE, Point(0,0));	
			/// Get the moments
 			vector<Moments> mu(contours250.size() );
			for( int i = 0; i < contours250.size(); i++ )
			{
				mu[i] = moments( contours250[i], false );
			}
			///  Get the mass centers:
			vector<Point2f> mc( contours250.size() );
			for( int i = 0; i < contours250.size(); i++ )
			{
				if(mu[i].m00 == 0)
				{
					mc[i] = Point2f(contours250[i][0].x, contours250[i][0].y);
					continue;
				}
				mc[i] = Point2f( mu[i].m10/mu[i].m00 , mu[i].m01/mu[i].m00 );
			}
			Mat drawing = Mat::zeros( image.size(), CV_8UC3 );
			if(findRectangle)
			{
				threshold(image, image100, 100, 255, 0);
				findContours(image100, contours100, hierarchy, RETR_TREE, CHAIN_APPROX_SIMPLE, Point(0,0));
				for( int i = 0; i< contours100.size(); i++ )
				{
					if(contourArea(contours100[i]) > 600000)
					{
						field = boundingRect(contours100[i]);
						cm_per_pixel_x = 182.88/field.width;
						cm_per_pixel_y = 182.88/field.height;
					}
				}
				findRectangle = false;		
			}			
			if(mc.size() > 0)
			{
				Scalar color = Scalar(255, 0, 0);
				float x;
				float y;
				circle(drawing, mc[0], 4, color, -1, 8, 0 );
				x = (mc[0].x - field.x)*cm_per_pixel_x;
				y = (mc[0].y - field.y)*cm_per_pixel_y;
				cout << "x: " << x << endl << "y: " << y << endl;
				mylist.push_back(true);
			}
			else
			{
				cout << "0" << endl;
			}
			// add rectangle representing field to drawing
			rectangle(drawing, field, Scalar(0, 255, 0));
			// push the drawing to the processedQueue for viewing (optional)
			processedQueue.push_back(drawing);
			// increment numImages and give back the control of grabbedQueue
			numImages++;
			processedQueueMutex.unlock();
			Mat colorImage;
			cvtColor(image, colorImage, COLOR_GRAY2BGR);
			printImages(colorImage,drawing);
		}
		// if there is no image to grab, give back control of grabbedQueue
		else
		{
			grabbedQueueMutex.unlock();
		}
	}
	// terminal output to signal end of process
	cout << "end imageProcessor()" << endl;
}

void queueSizeChecker()
{
	while(!done)
	{
		grabbedQueueMutex.lock();
		cout << "num in grabbedQueue is " << grabbedQueue.size() << endl;
		grabbedQueueMutex.unlock();
		processedQueueMutex.lock();
		cout << "num in processedQueue is " << processedQueue.size() << endl;
		processedQueueMutex.unlock();
		usleep(1000);
	}
	cout << "end queueSizeChecker()" << endl;
}

void imageViewer()
{
	while(!done)
	{
		processedQueueMutex.lock();
		if(!processedQueue.empty())
		{
			//imshow("Test",processedQueue.front());
			processedQueue.pop_front();
}
		processedQueueMutex.unlock();
	}
	cout << "end imageViewer()" << endl;
}




int main(int argc, char* argv[])
{
	int exitCode = 0;

	PylonInitialize();
	
	thread imgProcessor(imageProcessor);
	imgProcessor.detach();
	
	thread viewer(imageViewer);
	viewer.detach();
	
	try
	{
		CInstantCamera camera(CTlFactory::GetInstance().CreateFirstDevice());
		camera.Open();
		INodeMap& nodemap= camera.GetNodeMap();
		cout << "Using device " << camera.GetDeviceInfo().GetModelName() << endl;
		// Get the parameters for setting the image area of interest (Image AOI).
		CIntegerPtr(nodemap.GetNode("Width"))->SetValue(1216);
		CIntegerPtr(nodemap.GetNode("Width"))->SetValue(1216);
		CBooleanPtr(nodemap.GetNode("CenterX"))->SetValue(true);
		CBooleanPtr(nodemap.GetNode("CenterY"))->SetValue(true);
		//CBooleanPtr(nodemap.GetNode("AcquisitionFrameRateEnable"))->SetValue(true);
		//CIntegerPtr(nodemap.GetNode("AcquisitionFrameRate"))->SetValue(140);
		cout << CFloatPtr(nodemap.GetNode("ResultingFrameRate"))->GetValue() << endl;;
		CBooleanPtr(nodemap.GetNode("ChunkModeActive"))->SetValue(true);
		CEnumerationPtr(nodemap.GetNode("ChunkSelector"))->FromString("Timestamp");
		CBooleanPtr(nodemap.GetNode("ChunkEnable"))->SetValue(true);
		camera.RegisterImageEventHandler(new CRoboscapeGrabImageHandler, RegistrationMode_Append, Cleanup_Delete);
		if(verbose)
		{	thread sizeChecker(queueSizeChecker);
			sizeChecker.detach();}
		camera.StartGrabbing(numOfImagesToGrab, GrabStrategy_LatestImageOnly, GrabLoop_ProvidedByInstantCamera);
		while(camera.IsGrabbing())
		{
			usleep(10000);
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
	while(numImages != numOfImagesToGrab);
	cout << "num of blinks is " << mylist.size() << endl;
	done = true;
	wait_for_Enter();
	PylonTerminate(); 
	return exitCode;
}

