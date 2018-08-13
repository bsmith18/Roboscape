// roboscape.h
/*	This program utilizes the functionality of pylon object and the OpenCV library to 
 *	provide an API for the Roboscape system
 */

#include <pylon/PylonIncludes.h>
#include <opencv2/opencv.hpp>
#include <opencv2/imgproc.hpp>
#include <unistd.h>
#include <thread>
#include <mutex>

// Namespace for using python objects.
using namespace Pylon;

// Namespace for using opencv.
using namespace cv;

// Namespace for using cout.
using namespace std;

// Namspace for GenApi.
using namespace GenApi;

void wait_for_Enter()
{	
	cout << "Press ENTER to continue." << endl;
	while(!cin.get() == '\n');
}
