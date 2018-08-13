var SELECT2BOXID = "#filterSearchBox";
var PROTOTYPE_MARKER = "_P";
var BASICFEATURESET_MARKER = "_b";
var ADVANCEDFEATURESET_MARKER = "_a";

var CAMERA_TOPIC_LINK_CLASS = ".camera-topic-link";
var MAIL_RECIPIENT = "documentation@baslerweb.com";
var MAIL_SUBJECT = "Feedback on topic: ";
var MAIL_BODY_1 = "Hello,";
var MAIL_BODY_2 = "I have the following suggestion for improving the topic";
var PANEL = "div.panel";
var PANEL_CONTENT = "div.panel-content";
var PANEL_HEAD = ".panel-head";
var SPECIFICS_TABLE = ".specifics-table";
var SHOWALL_ENABLE = "Show all camera models";
var SHOWALL_DISABLE = "Show only your camera model";
var HYPOTHESISCHECKFILE = "../js/hypo.txt";
var SHARE_MESSAGE = "A link to the current topic, including camera selection, has been copied to the clipboard.";

// Camera naming scheme
// Using this scheme, camera names are mapped to RH filter names
// Example: All cameras named "acA...gm" are ace GigE mono SFNC1 cameras
var CAMERA_NAMING = [ 
    { 
        seriesid: "acA", 
        interfaceid: "g",
        colorid: "m",
        seriestag: "_ace_GigE",
        sfnctag: "_SFNC_1",
        colortag: "_Mono",        
    }, 
    { 
        seriesid: "acA", 
        interfaceid: "g",
        colorid: "c",
        seriestag: "_ace_GigE",
        sfnctag: "_SFNC_1",
        colortag: "_Color",
      }, 
    { 
        seriesid: "acA", 
        interfaceid: "u",
        colorid: "m", 
        seriestag: "_ace_USB", 
        sfnctag: "_SFNC_2",
        colortag: "_Mono",
    },    
    { 
        seriesid: "acA", 
        interfaceid: "u",
        colorid: "c",
        seriestag: "_ace_USB", 
        sfnctag: "_SFNC_2",
        colortag: "_Color",
    }, 
    { 
        seriesid: "daA", 
        interfaceid: "l",
        colorid: "c",
        seriestag: "_dart_LVDS",
        sfnctag: "_SFNC_2",
        colortag: "_Color",
    },
    { 
        seriesid: "daA", 
        interfaceid: "l",
        colorid: "m", 
        seriestag: "_dart_LVDS", 
        sfnctag: "_SFNC_2",
        colortag: "_Mono",
    }, 
    { 
        seriesid: "daA", 
        interfaceid: "m",
        colorid: "m",
        seriestag: "_dart_MIPI", 
        sfnctag: "_SFNC_2",
        colortag: "_Mono",
    },
    { 
        seriesid: "daA", 
        interfaceid: "m",
        colorid: "c",
        seriestag: "_dart_MIPI", 
        sfnctag: "_SFNC_2",
        colortag: "_Color",
    },
    { 
        seriesid: "daA", 
        interfaceid: "u",
        colorid: "m", 
        seriestag: "_dart_USB", 
        sfnctag: "_SFNC_2",
        colortag: "_Mono",
    }, 
    { 
        seriesid: "daA", 
        interfaceid: "u",
        colorid: "c", 
        seriestag: "_dart_USB", 
        sfnctag: "_SFNC_2",
        colortag: "_Color",
    },    
    { 
        seriesid: "puA", 
        interfaceid: "u",
        colorid: "m",
        seriestag: "_pulse_USB", 
        sfnctag: "_SFNC_2",
        colortag: "_Mono",
    },
    { 
        seriesid: "puA", 
        interfaceid: "u",
        colorid: "c",
        seriestag: "_pulse_USB", 
        sfnctag: "_SFNC_2",
        colortag: "_Color",
    }
];

// Cookie / LocalDB settings
var TRACKING_KEY_NAME = 'bslTrackingDisabled';
var CAMERA_ID_KEY_NAME = 'bslCurrentCameraID';
var COOKIE_INFO_KEY_NAME = 'bslCookieInfoAccepted';

// Tutorial
var STEPS_TUTORIAL = [
  {
    intro: "<p><strong>Information in this topic is tailored to a specific camera model.</strong></p><p>Default: acA2500-14gm.</p><p>You can change the camera model at any time.</p><p>To find out more, click <strong>Next</strong>.</p>"
  },
  {
    element: '.filter-holder',
    intro: "<p>Here, you can change the camera model.</p><p><strong>All model-specific information will be tailored to the camera model selected.</strong></p>"
  },
  {
    element: '#selectedDeviceLink',
    intro: "Here, you can access basic information about the camera model selected."
  },
  {
    element: '#tocbtn',
    intro: "Here, you can switch to the table of contents."
  },
  {
    element: '#helpbtn',
    intro: "That's it! You can always restart the tutorial by clicking here."
  }                  
];

// Warning for unsupported topics
var STEPS_WARNING = [
  {
    intro: "<p><strong>The information in this topic does not apply to your camera model.</strong></p><p>Click 'Close' or anywhere outside this dialog to view anyway.</p><p>Click 'Choose camera' to select a different camera model.</p>"
  },
  {
    element: '#helpbtn',
    intro: " "
  }
];

// Warning for prototype cameras
var STEPS_PROTOTYPE = [
  {
    intro: "<p><strong>This camera is a design-in sample.</strong></p><p>All information given is subject to change.</p>"
  }
];

// Cookie information
var COOKIE_INFO_TEXT = "<span>This site uses cookies to enhance your experience. By continuing to visit this site you agree to our <a href='en/privacy_statement.htm'>use of cookies</a>.<a href='#' id='cookiebtn'>OK</a></span>";

