// ContinuousGrab.cpp
// Include files to use the PYLON API. Example modified from internet source.
#include <pylon/PylonIncludes.h>
#ifdef PYLON_WIN_BUILD
#    include <pylon/PylonGUI.h>
#endif

#include <unistd.h>
#include <opencv2/opencv.hpp>

// Namespace for using pylon objects.
using namespace Pylon;
// Namespace for using cout.
using namespace std;

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


// Example of an image event handler.
class CSampleImageEventHandler : public CImageEventHandler
{
	public:
		virtual void OnImageGrabbed( CInstantCamera& camera, const CGrabResultPtr& ptrGrabResult)
    {
    	static INIT_TIMER;         
      size_t stride = 0;
      ptrGrabResult->GetStride(stride);
                                                                                     
      const uint8_t *pImageBuffer = (uint8_t *) ptrGrabResult->GetBuffer();
      cv::Mat cvmat(cv::Size(ptrGrabResult->GetWidth(), ptrGrabResult->GetHeight()), CV_8UC1, (void*)pImageBuffer, stride);
      cv::imshow("Test", cvmat);
      cv::waitKey(1);

      cout << "CSampleImageEventHandler::OnImageGrabbed called." << std::endl;
      //usleep(500000);*/
      STOP_TIMER("aquire");
      START_TIMER;
    }
};

int main(int argc, char* argv[])
{
	// The exit code of the sample application.
  int exitCode = 0;

  // Before using any pylon methods, the pylon runtime must be initialized. 
  PylonInitialize();

  try
  {
  	// Create an instant camera object for the camera device found first.
    CInstantCamera camera( CTlFactory::GetInstance().CreateFirstDevice());

    // Register the standard configuration event handler for enabling software triggering.
    // The software trigger configuration handler replaces the default configuration
    // as all currently registered configuration handlers are removed by setting the registration mode to RegistrationMode_ReplaceAll.
    //camera.RegisterConfiguration( new CSoftwareTriggerConfiguration, RegistrationMode_ReplaceAll, Cleanup_Delete);

    // For demonstration purposes only, add a sample configuration event handler to print out information
    // about camera use.
    //camera.RegisterConfiguration( new CConfigurationEventPrinter, RegistrationMode_Append, Cleanup_Delete);

    // The image event printer serves as sample image processing.
    // When using the grab loop thread provided by the Instant Camera object, an image event handler processing the grab
    // results must be created and registered.
    //camera.RegisterImageEventHandler( new CImageEventPrinter, RegistrationMode_Append, Cleanup_Delete);

    // For demonstration purposes only, register another image event handler.
    camera.RegisterImageEventHandler( new CSampleImageEventHandler, RegistrationMode_Append, Cleanup_Delete);

    // Open the camera device.
    camera.Open();
    camera.StartGrabbing( GrabStrategy_LatestImageOnly , GrabLoop_ProvidedByInstantCamera);

    // Can the camera device be queried whether it is ready to accept the next frame trigger?
    if (camera.IsGrabbing())
    {
    	// Start the grabbing using the grab loop thread, by setting the grabLoopType parameter
      // to GrabLoop_ProvidedByInstantCamera. The grab results are delivered to the image event handlers.
      // The GrabStrategy_OneByOne default grab strategy is used.
      while(true)
      {
	cout << "Press Enter to stop grabbing images" << endl;
	if(cin.get() == '\n')
	{
		break;
	}
      	usleep(1000);
      }
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
	// Releases all pylon resources. 
	PylonTerminate(); 
	return exitCode;
}
