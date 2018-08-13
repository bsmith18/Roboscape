// roboscape.h
/*	This program utilizes the functionality of pylon object and the OpenCV library to 
 *	provide an API for the Roboscape system
 */

#include <pylon/PylonIncludes.h>
#include <opencv2/opencv.hpp>
#include <unistd.h>
#include <thread>
#include <chrono>

// Namespace for using python objects.
using namespace Pylon;

// Namespace for using opencv.
using namespace cv;

// Namespace for using cout.
using namespace std;

// Namspace for GenApi.
using namespace GenApi;

#define TIMING

#ifdef TIMING
#define INIT_TIMER auto start = std::chrono::high_resolution_clock::now();
#define START_TIMER  start = std::chrono::high_resolution_clock::now();
#define STOP_TIMER(name)  std::cout << "RUNTIME of " << name << ": " << \
	std::chrono::duration_cast<std::chrono::microseconds> \
	(std::chrono::high_resolution_clock::now()-start).count() \
	/ 1000.f << " ms " << std::endl;

#define GET_TIMER  std::chrono::duration_cast<std::chrono::microseconds>(std::chrono::high_resolution_clock::now()-start).count()
#else
#define INIT_TIMER
#define START_TIMER
#define STOP_TIMER(name)
#define GET_TIMER
#endif

void wait_for_Enter()
{	
	cout << "Press ENTER to continue." << endl;
	while(!cin.get() == '\n');
	return;
}
