webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n    /* border: 1px solid black; */\n    display: inline-block;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Load the navigation  -->\n<app-resume-navigation></app-resume-navigation>\n\n<div class=\"row\" style=\"text-align:center; padding-top:42px;\">\n    <!-- This loads the header of the resume, which is the 'basics' section of the json file -->\n  <app-resume-header></app-resume-header>\n</div>\n\n<div class=\"content row\">\n  <!--The following should be the resume-content -->\n  <router-outlet></router-outlet> \n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        // The HTML-tag (selector) which needs to be insert into the HTML to load this component
        selector: "app-root",
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_loading__ = __webpack_require__("./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_navigation_component__ = __webpack_require__("./src/app/resume-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resume_service__ = __webpack_require__("./src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resume_content_component__ = __webpack_require__("./src/app/resume-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resume_header_component__ = __webpack_require__("./src/app/resume-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_routing_module__ = __webpack_require__("./src/app/resume-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_date_pipe__ = __webpack_require__("./src/app/custom-date.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__resume_navigation_component__["a" /* ResumeNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__resume_content_component__["a" /* ResumeContentComponent */],
            __WEBPACK_IMPORTED_MODULE_10__custom_date_pipe__["a" /* CustomDate */],
            __WEBPACK_IMPORTED_MODULE_8__resume_header_component__["a" /* ResumeHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            // Contains the URL-routing information
            __WEBPACK_IMPORTED_MODULE_9__resume_routing_module__["a" /* ResumeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["b" /* LoadingModule */]
        ],
        // Provides the ResumeService as dependency injection to all components
        providers: [__WEBPACK_IMPORTED_MODULE_6__resume_service__["a" /* ResumeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/custom-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var CustomDate = (function (_super) {
    __extends(CustomDate, _super);
    function CustomDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDate.prototype.transform = function (value, pattern) {
        try {
            return _super.prototype.transform.call(this, value, pattern);
        }
        catch (error) {
            //In case we cannot transform the input value we just pass it back
            return value;
        }
    };
    return CustomDate;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]));
CustomDate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'customDate' })
], CustomDate);

//# sourceMappingURL=custom-date.pipe.js.map

/***/ }),

/***/ "./src/app/mock-resume.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resume_data; });
var resume_data = {
    "basics": {
        "name": "Thorsten Bux",
        "label": "Software Engineer",
        "picture": "./assets/Thorsten_circle-grey.png",
        "email": "thorsten.bux@outlook.com",
        "phone": "+64 2040921033",
        "url": "https://augmentmy.world",
        "summary": "<em><strong>With all I do, I believe in empowering people. I believe in inspiring products.</strong>\
     The way I empower people is by creating products that aim for ease of use, excitement and simplicity.<br><br>\
     I have an academic background in software architecture and computer science with emphasis on 2D and 3D content\
    creation for desktop and mobile.<br>\
    I have more then ten years of work experience in information technology, including 5 years of experience in augmented reality\
    and several years of experience in creating products in the IoT realm. I have a profound knowledge in software engineering and\
     solution design.</em>",
        "location": {
            "address": "118 Stapletons Road",
            "postalCode": "8013",
            "city": "Christchurch",
            "countryCode": "NZ",
            "region": "Canterbury"
        },
        "profiles": [
            {
                "network": "linkedIn",
                "username": "ThorstenBux",
                "url": "https://www.linkedin.com/in/thorstenbux"
            },
            {
                "network": "stackoverflow",
                "username": "Thor_Bux",
                "url": "https://stackoverflow.com/users/5843642/thor-bux"
            },
            {
                "network": "gitHub",
                "username": "ThorstenBux",
                "url": "https://github.com/thorstenbux"
            },
            {
                "network": "twitter",
                "username": "thor_bux",
                "url": "https://twitter.com/thor_bux"
            },
            {
                "network": "augmentmyworld",
                "url": "http://augmentmy.world/"
            }
        ]
    },
    "work": [
        {
            "company": "Realmax",
            "description": "Deepen human understanding by making AR accessible to everyone!",
            "position": "Software Engineer - ARToolKit | Realweb",
            "url": "https://www.realmax.com",
            "startDate": "2017-09-01",
            "endDate": "current",
            "summary": "Full stack Software Engineering for web, mobile and desktop, which included Software- and Solution-Architecture.\
         I work with technologies like: JavaScript, Android, Java, C#, C++, Angular, Unity3D, Bluetooth, OpenGL, CMake, PHP, MySQL, SQLite,\
         CSS, HTML, iOS, Gradle. Additionally I was responsible for shaping the community around ARToolKit with various blog articles,\
           video tutorials, maintaining the forum and managing social media accounts.",
            "highlights": [
                "Bluetooth based configuration app to enable tracking on Raspberry PI",
                "Integrate two large JavaScript components (JSARToolKit, Monaco Editor) into existing JavaScript application",
                "Refactor and update JSARToolKit to enable iOS support",
                "Reestablish the community to the new artoolkitX brand",
                "Setup JavaScript project structure",
                "Consulting on using WebPack to manage dependencies and bundle the web-app"
            ]
        },
        {
            "company": "DAQRI",
            "description": "Fundamentally change the way we live, work, and drive with augmented reality",
            "position": "Software Engineer - ARToolKit",
            "url": "https://www.daqri.com",
            "startDate": "2015-12-01",
            "endDate": "2017-08-31",
            "summary": "Full stack Software Engineering for web, mobile and desktop, which included Software- and Solution-Architecture.\
       I worked with technologies like: Android, Java, C#, C++, JavaScript, Angular, Unity3D, OpenGL, CMake, PHP, MySQL, SQLite, CSS,\
        HTML, iOS, Gradle. Additionally I was responsible for shaping the community around ARToolKit with various blog articles, video\
         tutorials, maintaining the forum and managing social media accounts.",
            "highlights": [
                "Android app development including PlayStore launch",
                "Continuous delivery system: Build, package, test, deploy for all major platforms(macOS, iOS, Android, Linux, Windows)",
                "Refactoring a large code base to ensure growth and future viability",
                "QT, QT-Quick, QML: Learning of the QT stack and development of a medium sized application from scratch",
                "Teaching Android and Unity3D development with ARToolKit at Oxford Brookes University",
                "New website and forum design including UX improvements"
            ]
        },
        {
            "company": "Bosch Software Innovations",
            "description": "Experts for the Internet of Things",
            "position": "Software Engineer, Project Manager, Product Owner, Business Analyst - IoT Projects",
            "url": "https://www.bosch-si.com",
            "startDate": "2014-01-01",
            "endDate": "2015-09-15",
            "summary": "My supervisors highly appreciated my high versatility because I seamlessly switched between roles like Project\
       Management, Software engineering, Product Ownership, Scrum Master and Department Representative. I crated This included\
        solution architectures and technical concepts as well as preparing exhibitions, preparing management meetings, managing a\
         software engineering team and developing software using Java, Maven, Jenkins, GIT, JMeter.",
            "highlights": [
                "Realized an outstanding agricultural solution targeting farmers that resulted in very satisfied clients",
                "Maintained a stable network inside the Robert Bosch cooperation",
                "Performed an exciting presentation in for the Robert Bosch CEO and top management. Some weeks later parts of the presentation\
         were used as success story during a CEO-keynote",
                "Ensured that my department was being established as a competent partner for IoT-Projects",
                "Successfully designed key visuals of complex software products that were used to represent the core offerings of my department"
            ]
        },
        {
            "company": "Bosch Software Innovations",
            "description": "Experts for the Internet of Things",
            "position": "Project Manager, Scrum Master, User Experience responsible - Telemedicine project",
            "url": "https://www.bosch-si.com",
            "startDate": "2013-01-01",
            "endDate": "2013-12-01",
            "summary": "Scrum master and software engineer of an outstanding new software product for health care professionals. Additionally\
       I was responsible for creating a new user experience design and analysing and specifying client requirements.",
            "highlights": [
                "Lead UX-Workshops with international participants. The results of the workshops received high appreciation up to senior\
             management. The Workshop's success spread across the company.",
                "Delivered committed sprint results in time."
            ]
        },
        {
            "company": "Bosch Software Innovations",
            "description": "Experts for the Internet of Things",
            "position": "Head of Development, Technical Consultant - Vehicle diagnosis and repair software project",
            "url": "https://www.bosch-si.com",
            "startDate": "2011-03-01",
            "endDate": "2012-12-31",
            // "summary": "",
            "highlights": [
                "Overlooked the software development process",
                "Analysed and specified requirements",
                "Took care of several releases as proxy release manager"
            ]
        },
        {
            "company": "Bosch Software Innovations",
            "description": "Experts for the Internet of Things",
            "position": "Software Engineer – Vehicle diagnosis and repair software project",
            "url": "https://www.bosch-si.com",
            "startDate": "2010-03-15",
            "endDate": "2011-02-31",
            // "summary": "",
            "highlights": [
                "Software development: Java, Spring, OSGi, Maven, Jenkins, SVN, JMeter, C++, C#",
                "Software architecture: Enterprise Architect, Arc42"
            ]
        },
        {
            "company": "Bosch Software Innovations",
            "description": "Experts for the Internet of Things",
            "position": "Master Thesis",
            "url": "https://www.bosch-si.com",
            "startDate": "2009-09-01",
            "endDate": "2010-03-31",
            "summary": "Next generation of mobile maintenance – Remote control of diagnostic devices over the internet"
            // "highlights": [
            //       "",
            //       ""
            // ]
        }
    ],
    "projects": [
        {
            "name": "RealWeb",
            "description": "Create a web based augmented reality 3D editor",
            "highlights": ["Integration of JavaScript component for web based code editing (Monaco)",
                "Integration of browser based augmented reality toolkit (JSARToolKit5)",
                "Consulting on dependency and build management (WebPack)"],
            // keywords: ["Android"],
            "startDate": "2017-09-01",
            "endDate": "current",
            "url": "http://www.realmax.com/",
            "roles": ["Software engineer", "Software architect", "DevOps"],
            "company": "Realmax"
            // type: "Application"
        },
        {
            "name": "artoolkitX",
            "description": "Create a new version of the famous ARToolKit5 framework",
            "highlights": ["Raspberry PI enabled tracker",
                "Bluetooth WiFi setup",
                "JSARToolKit update"],
            // keywords: ["Android"],
            "startDate": "2017-09-01",
            "endDate": "current",
            "url": "https://www.artoolkitx.org",
            "roles": ["Software engineer", "Release manager", "Social Media representative"],
            "company": "artoolkitX"
            // type: "Application"
        },
        {
            "name": "ARToolKit6",
            "description": "Create a new version of the famous ARToolKit5 framework",
            "highlights": ["Android camera calibration app",
                "Unity3D plugin",
                "Continuous integration and delivery chain",
                "QT desktop application"],
            // keywords: ["Android"],
            "startDate": "2016-03-01",
            "endDate": "2017-07-28",
            "url": "https://www.artoolkit.org",
            "roles": ["Software engineer", "Release manager", "Social Media representative"],
            "company": "DAQRI"
            // type: "Application"
        },
        {
            "name": "Augmented Reality Winter School - Oxford Brookes University",
            "description": "Teaching a class of 30 students about Augmented Reality and ARToolKit6",
            "highlights": ["ARToolKit6 for Unity3D",
                "ARToolKit6 on Android",
                "Augmented Reality and Camera Calibration"
            ],
            // keywords: ["Android"],
            "startDate": "2017-01-23",
            "endDate": "2017-01-26",
            // url: "artoolkit.org",
            "roles": ["Speaker"],
            "company": "DAQRI"
            // type: "Conference"
        },
        {
            "name": "Deepfield",
            "description": "IoT for Agriculture",
            "highlights": ["Connected temperature sensors in Asparagus fields",
                "Android application to monitor fields"
            ],
            "startDate": "2015-01-15",
            "endDate": "2015-08-31",
            "roles": ["Software engineer", "Scrum Master"],
            "company": "Bosch Software Innovations",
            "type": "Software product"
        },
        {
            "name": "Connected Heating appliance",
            "description": "SmartHome and connected appliances",
            "highlights": ["Connect domestic heating appliances",
                "Monitor and configure heating appliances over the air (OTA)",
                "Dashboard for heating appliance technician"
            ],
            // keywords: ["Android"],
            "startDate": "2014-03-01",
            "endDate": "2015-08-31",
            // url: "artoolkit.org",
            "roles": ["Software engineer", "Project Manager"],
            "company": "Bosch Software Innovations",
            "type": "Software product"
        },
        {
            "name": "Health buddy",
            "description": "Health care professional dashboard",
            "highlights": ["User Experience study and workshop",
                "Much improved dashboard prototype"
            ],
            // keywords: ["Android"],
            "startDate": "2013-01-01",
            "endDate": "2013-12-31",
            // url: "artoolkit.org",
            "roles": ["Software engineer", "Scrum Master"],
            "company": "Bosch Software Innovations",
            "type": "Software product"
        },
        {
            "name": "Smart vehicle maintenance",
            "description": "Connect vehicles and vehicle diagnostic devices",
            "highlights": ["Interactive recommendations for vehicle repair based on vehicle error codes"],
            // keywords: ["Android"],
            "startDate": "2011-03-15",
            "endDate": "2012-12-31",
            // url: "artoolkit.org",
            "roles": ["Software engineer", "Software development manager"],
            "company": "Bosch Software Innovations",
            "type": "Software product"
        }
    ],
    // "volunteer": [
    //   {
    //     "organization": "",
    //     "position": "",
    //     "url": "",
    //     "startDate": "",
    //     "endDate": "",
    //     "summary": "",
    //     "highlights": []
    //   }
    // ],
    "education": [
        {
            "institution": "Hochschule Furtwangen University",
            "area": "Computer Science in Application Architectures",
            "studyType": "Master",
            "startDate": "2008-09-01",
            "endDate": "2010-03-31",
            // "gpa": "4.0",
            "courses": [
                "Master thesis: Next generation of mobile maintenance – Remote control of diagnostic devices over the internet",
                "CS2011 - Java Introduction"
            ]
        },
        {
            "institution": "University of Technology Sydney",
            "area": "Computer Science",
            "studyType": "Study Abroad ",
            "startDate": "2007-07-01",
            "endDate": "2008-01-31",
            // "gpa": "4.0",
            "courses": [
                "Application Programming (Java) - High Distinction",
                "Game Programming (C#) - High Distinction"
            ]
        },
        {
            "institution": "Hochschule Furtwangen University",
            "area": "Computer Science in Media",
            "studyType": "Bachelor",
            "startDate": "2004-09-01",
            "endDate": "2008-07-31",
            // "gpa": "4.0",
            "courses": [
                "Bachelor thesis: The mobile phone as menu – Technologies to deliver location based mobile services",
                "CS2011 - Java Introduction"
            ]
        }
    ],
    // "awards": [
    //   {
    //     "title": "Digital Compression Pioneer Award",
    //     "date": "2014-11-01",
    //     "awarder": "Techcrunch",
    //     "summary": "There is no spoon."
    //   }
    // ],
    "publications": [
        {
            "name": "Integrate ARToolKit6-Android-SDK to an Android Studio project",
            "publisher": "YouTube",
            "releaseDate": "2017-07-04",
            "url": "https://www.youtube.com/watch?v=m6w7EEQYFCY&t=10s",
            "summary": "How to add ARToolKit6-Android-SDK into an existing Android Studio project?"
        },
        {
            "name": "Migrate to ARToolKit6 from ARToolKit5",
            "publisher": "Thor_Bux",
            "releaseDate": "2017-07-17",
            "url": "http://augmentmy.world/migratetoartoolkit6",
            "summary": "How to migrate a Unity3D project from ARToolKit5 to ARToolKit6"
        },
        {
            "name": "Agility at Bosch: mission impossible?",
            "publisher": "Bosch Software Innovations",
            "releaseDate": "2015-06-16",
            "url": "http://blog.bosch-si.com/categories/internetofthings/2015/06/agility-at-bosch-mission-impossible/",
            "summary": "Co-Author of the Asparagus field article released by the Robert Bosch CEO."
        },
        {
            "name": "Integrating heterogeneous things within the enterprise",
            "publisher": "Bosch Software Innovations",
            "releaseDate": "2014-04-21",
            "url": "http://blog.bosch-si.com/categories/technology/2014/05/part-2-integrating-heterogeneous-things-within-the-enterprise/",
            "summary": "Technical details on how to integrate IoT devices into the Bosch IoT Platform"
        },
        {
            "name": "User Experience in an IoT healthcare project",
            "publisher": "Bosch Software Innovations",
            "releaseDate": "2013-08-02",
            "url": "http://blog.bosch-si.com/categories/projects/2013/08/user-experience-in-an-iot-health-care-project/",
            "summary": "Technical details on how to integrate IoT devices into the Bosch IoT Platform"
        }
    ],
    "personal skills": [
        {
            "name": "Understand the customer",
            // "level": "Master",
            "keywords": [
                "Experience with several parts of the customer service life cycle. I gained that skill because I've been responsible\
         for establishing the first customer contact, analysing requirements, setting up project structures and successfully\
             conducting projects",
                "Excellent in putting myself in the position of the client and in developing a product tailored to the customer needs.\
         I used and further developed this skill whilst working in the areas of automotive, healthcare, domestic heating and agriculture"
            ]
        },
        {
            "name": "Connecting with people",
            "keywords": [
                "In my previous roles I have always created a reliable network of colleagues, clients and partners who knew that they can\
         rely on me and trust me. With the result that I have a local and abroad network that I can rely on if necessary."
            ]
        },
        {
            "name": "Team work",
            "keywords": [
                "Open and trustworthy nature that encourages colleagues to share their ideas and thoughts. This has always proved to be\
         helpful in coming up with very good solutions as a team",
                "Great at working together with clients and colleagues across departments, business units and regions. I developed this\
         skill during specifying software solutions with people all around the globe, including America, UK, Singapore, India, \
         Australia, Japan and Bulgaria"
            ]
        },
        {
            "name": "Efficient communication",
            "keywords": [
                "Effective at communicating project states, product features and technical restrictions to senior management and board \
        members to enable them to make profound decisions",
                "Skilled at passing on even the most complex topics and ideas by telling a story and by visualizing the context",
                "Experience in communicating with people at all levels in organizations and all over the globe including meetings, \
        telephone conferences and e-mail",
                "Remarkable at writing articles that catch the attention of the reader and are written in an entertaining way. \
        I discovered that talent whilst writing blog articles for Bosch which got used as press statements and CEO articles.\
         I strengthen that by running my own blog"
            ]
        },
        {
            "name": "Inspiring and guiding",
            "keywords": [
                "Skilled at leading and motivating a team with excitement and confidence about the overall project goal",
                "Successful in setting up a newly assembled team by moderating kick-off meetings and establishing some basic \
        collaboration rules with the result of having a highly productive team in a very short time",
                "Ability to lead an international team. I developed this skill while I was responsible for the realization of a \
        product that showed the capabilities of our software suite components",
                "Experience in enabling a team to work as self-contained as possible by removing obstacles and trusting the \
        opinion of each team member"
            ]
        },
        {
            "name": "Target orientation",
            "keywords": [
                "Ability to identify the important things from a client and company perspective and to focus on them to ensure an in-time delivery"
            ]
        },
        {
            "name": "Can do attitude",
            "keywords": [
                "Enthusiastic to pick-up new domains, projects and technologies with the strong will and ability to create the best\
         solution for the client. In the last positions, I was often faced with new domains and challenges and I love to\
          assimilate the knowledge needed to create outstanding solutions"
            ]
        },
        {
            "name": "Planning and organizing",
            "keywords": [
                "Ability to plan and execute projects self-contained. I learned this when I was responsible for several projects, \
        showcases and exhibitions",
                "Excellent management of balancing the needed attention for different topics. In keeping three different projects \
        on track at the same time, I gained a keen sense for the fact how much time to spend on which task",
                "Successful in keeping distractions away from the development team and in taking care of all obstacles that prevent \
        the team from being productive"
            ]
        }
    ],
    "technical skills": [
        {
            "name": "Software Engineering",
            "level": "Master",
            "keywords": [
                "Proficient in software programming with the programming languages Java, C# and C++",
                "Profound knowledge at creating architectural designs and in specifying interfaces for software components and software solutions",
                "Skilled at writing specifications for various customer groups or development teams",
                "Rapid perception of existing code bases to add new features or fix bugs. Within a few hours I was able to extend an existing web \
        application although I was completely new to the code and development language",
                "Self-dependent implementation of software components",
                "Knowledge of JavaScript including ES2015 and Angular, gained by implementing user interface components \
        including a health care solution. Continuous improvement of that knowledge using online courses"
            ]
        },
        {
            "name": "Software Architecture",
            "level": "Master",
            "keywords": [
                "Enterprise Architect",
                "Arc42",
                "UML",
                "VISIO"
            ]
        },
        {
            "name": "Backend development",
            "level": "Experienced",
            "keywords": [
                "Java",
                "Vert.x",
                "NodeJS",
                "ExpressJS",
                "TypeScript"
            ]
        },
        {
            "name": "Web Development",
            "level": "Advanced",
            "keywords": [
                "Javascript",
                "ES2015",
                "TypeScript",
                "PHP",
                "Python",
                "Angular",
                "HTML",
                "CSS"
            ]
        },
        {
            "name": "Mobile Development",
            "level": "Advanced",
            "keywords": [
                "Android",
                "Gradle",
                "iOS",
                "Unity3D for mobile",
                "PlayStore"
            ]
        },
        {
            "name": "SaaS/IaaS platforms",
            "level": "Experienced",
            "keywords": [
                "IBM BlueMix",
                "Amazon Web Services (AWS)",
                "OpenShift",
                "Azure"
            ]
        },
        {
            "name": "Graphics programming / Game programming",
            "level": "Advanced",
            "keywords": [
                "Unity3D",
                "OpenGL 2.0/3.0",
                "OpenGL ES 2.0",
                "C++"
            ]
        },
        {
            "name": "Virtualization/Container environments",
            "level": "Advanced",
            "keywords": [
                "VMWare",
                "Parallels",
                "Docker"
            ]
        },
        {
            "name": "Source code versioning",
            "level": "Master",
            "keywords": [
                "Git",
                "SVN",
                "CVS"
            ]
        },
        {
            "name": "Software development IDEs",
            "level": "Master",
            "keywords": [
                "Eclipse",
                "Android Studio",
                "Visual Studio",
                "Visual Studio Code",
                "Unity3D",
                "XCode",
                "WebStorm"
            ]
        },
        {
            "name": "Build management",
            "level": "Advanced",
            "keywords": [
                "CMake",
                "Gradle",
                "Maven",
                "Jenkins"
            ]
        },
        {
            "name": "Desktop development",
            "level": "Advanced",
            "keywords": [
                "Java",
                "QT",
                "QML",
                "QT-Quick",
                "C++",
                "C#"
            ]
        },
        {
            "name": "Databases",
            "level": "Experienced",
            "keywords": [
                "MS SQL",
                "MySQL",
                "RethinkDB",
                "MongoDB",
                "SQLite",
                "FileMaker"
            ]
        },
        {
            "name": "Cross platform compilation",
            "level": "Advanced",
            "keywords": [
                "Android",
                "Linux",
                "macOS",
                "Windows"
            ]
        },
        {
            "name": "Other",
            // "level": "Advanced",
            "keywords": [
                "Shell scripting on macOS and Linux",
                "JIRA",
                "Confluence",
                "Elastic Search",
                "Web hosting",
                "JUnit",
                "JMeter",
                "OpenCV"
            ]
        }
    ],
    "languages": [
        {
            "language": "English",
            "fluency": "fluent (speaking, reading, writing)"
        },
        {
            "language": "German",
            "fluency": "native language"
        }
    ],
    "interests": [
        {
            "name": "Family",
            "keywords": [
                "Wife",
                "3 kids"
            ]
        },
        {
            "name": "Cooking",
            "keywords": [
                "Vegan",
                "Vegetarian"
            ]
        },
        {
            "name": "Motorhome travelling",
            "keywords": [
                "New Zealand",
                "Australia",
                "Germany"
            ]
        }
    ],
    "references": [
        {
            "name": "Go Media Academy",
            "reference": "As a Community interest company, we exist for the benefit of children and young people in our communities.\
       Offering new innovative media technologies and providing unique experiences for everyone. The Augmented Reality Web application \
       has exceeded all of our expectations. Children and young people can now take their learning experiences further through a browser.\
       This program has generated much excitement among the community and schools in Northern Ireland.",
            "date": "2016-09-01"
        },
        {
            "name": "Oxford Brookes University",
            "reference": "Augmented Reality is a great fun! What if it is what you do everyday!\
       Great course by @daqri @artoolkit_ @oxford_brookes",
            "date": "2017-01-26"
        }
    ]
};
//# sourceMappingURL=mock-resume.js.map

/***/ }),

/***/ "./src/app/resume-content.component.css":
/***/ (function(module, exports) {

module.exports = ".resume-content {\n    text-align: left;\n    border-left: solid;\n    border-left-color: #d3d6db;\n    border-left-width: 2px;\n    margin-top: 25px;\n}\n\n.resume-content ul{\n    padding-left: 0px;\n    margin-left: -5px;\n}\n\n.resume-content li{\n    list-style:none;\n    padding-top: .1em;\n    padding-bottom: 0.1em;\n    padding-left: 15px;\n    list-style-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhCAkKHjM6sr3TAAAAR0lEQVQ4y2NgGAUjGzQyNJCiXJfhD8N/0rREkK4lki5aokjXEo1by3+8EK6FidoRGE2aL4aycjyJjxmrhlcMTAwHSYvhoQQAIEs0Sco+ifIAAAAASUVORK5CYII=');  \n}\n\n.resume-content .highlights, .courses{\n    margin-bottom: 10px;\n}\n\n.resume-content .highlights li, .courses li, .keywords li, .roles li{\n    list-style-type: circle !important;\n    list-style-image: initial;\n    margin-left: 20px;\n}\n\n.resume-content .date {\n    font-size: 10pt;\n    margin-bottom: 10px;\n}\n\n.resume-content .company, .name, .institution, .language{\n    font-size: 12pt;\n}\n\n.resume-content .description, .area, .fluency {\n    font-size: 10pt;\n    margin-bottom: 10px;\n}\n\n.resume-content .position, .studyType, .level {\n    font-size: 14pt;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n\n.resume-content .summary {\n    margin-bottom: 10px;\n}\n\n.resume-content .url{\n    /* display: block; */\n}"

/***/ }),

/***/ "./src/app/resume-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-content col-md-7 col-md-offset-5\">\n    <div *ngFor=\"let entry of resumeDetail; let i = index\">\n        <ul>\n            <li>\n                <div *ngIf=\"entry.startDate && entry.endDate\" class=\"date\">\n                    {{entry.startDate | date:\"MMMM y\" | uppercase}} - {{entry.endDate | customDate: \"MMMM y\" | uppercase}}\n                </div>\n                <div *ngIf=\"entry.date\" class=\"date\">\n                    {{entry.date | date:\"MMMM y\" | uppercase}}\n                </div>\n            \n                <div *ngFor=\"let key of getObjectKeys(i); let z = index\">\n                    <div *ngIf=\"!key.toLowerCase().includes('date')\">\n                        <div *ngIf=\"key === 'summary' || key === 'highlights'\"><h5>{{key}}</h5></div> \n                        <div *ngIf=\"!itemIsArray(entry[key]); else renderArray\" [ngClass]=\"key\">\n                            <a *ngIf=\"key==='url'; else renderText\" href=\"{{entry[key]}}\">\n                                {{entry[key]}}\n                            </a>\n                            <ng-template #renderText>\n                                {{entry[key]}}\n                            </ng-template>\n                        </div>\n                        <ng-template #renderArray>\n                            <ul [ngClass]=\"key\">\n                                <li *ngFor=\"let element of entry[key]\">\n                                    {{element}}\n                                </li>\n                            </ul>\n                        </ng-template>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/resume-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__("./src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResumeContentComponent = (function () {
    // Inject ResumeService and ActivatedRoute into this component
    function ResumeContentComponent(resumeService, route) {
        this.resumeService = resumeService;
        this.route = route;
    }
    ResumeContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Evaluate the URL/route to see the entry point and to load data respectively
        this.route.paramMap
            .switchMap(function (params) {
            _this.resumeItem = params.get("resumeItem");
            return _this.resumeService.getResumeDetail(params.get("resumeItem"));
        }).subscribe(function (resumeDetail) {
            _this.resumeDetail = resumeDetail;
        });
    };
    // Get all the keys of the loaded resume content. Needed to evaluate which key the HTML processes to use the correct styling
    ResumeContentComponent.prototype.getObjectKeys = function (pos) {
        return Object.keys(this.resumeDetail[pos]);
    };
    // Handle arrays differently in HTML
    ResumeContentComponent.prototype.itemIsArray = function (object) {
        return Array.isArray(object);
    };
    return ResumeContentComponent;
}());
ResumeContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-resume-content",
        template: __webpack_require__("./src/app/resume-content.component.html"),
        styles: [__webpack_require__("./src/app/resume-content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ResumeContentComponent);

var _a, _b;
//# sourceMappingURL=resume-content.component.js.map

/***/ }),

/***/ "./src/app/resume-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!resumeDataBasics\">\n    A little bit of patience please, I'm running on a shared environment.\n    <ngx-loading [show]=\"!resumeDataBasics\" [config]=\"{  animationType: ANIMATION_TYPES.wanderingCubes, backdropBorderRadius: '14px' }\"></ngx-loading>\n</div>\n<div *ngIf=\"resumeDataBasics\" class=\"row\" style=\"text-align:left\">\n  \n  <div class=\"col-md-4\">\n    <div class=\"page-header\">\n        <h1>{{resumeDataBasics.name}} <br/> <small>{{resumeDataBasics.label}}</small></h1>\n    </div>\n  </div>\n  <div class=\"col-md-4\" style=\"text-align:center\"> <img width=\"250\" src=\"{{resumeDataBasics.picture}}\"></div>\n    <div class=\"col-md-4\" style=\"margin-top:30px;\">\n        <div class=\"row\" style=\"padding-bottom:31px; padding-left:5px\">\n            <div class=\"col-md-8\">\n                <span *ngFor=\"let profile of resumeDataBasics.profiles\">\n                    <a href=\"{{profile.url}}\" target=\"_blank\"><img width=\"40px\" height=\"40px\" src=\"./assets/socialMedia/{{profile.network}}.png\"></a>\n                </span>\n            </div>\n        </div>\n        <div class=\"row\" style=\"padding-left:5px\">\n            <!-- <div class=\"col-md-1 glyphicon glyphicon glyphicon-send\" aria-hidden=\"true\"></div> -->\n            <div class=\"col-md-8\"><a href=\"mailto:{{resumeDataBasics.email}}\">{{resumeDataBasics.email}}</a></div>\n        </div>\n        <div class=\"row\" style=\"padding-left:5px\">\n            <!-- <div class=\"col-md-1 glyphicon glyphicon glyphicon-phone\" aria-hidden=\"true\"></div> -->\n            <div class=\"col-md-8\">{{resumeDataBasics.phone}}</div>\n        </div>\n        <div class=\"row\" style=\"padding-left:5px\">\n            <!-- <div class=\"col-md-1 glyphicon glyphicon glyphicon-envelope\" aria-hidden=\"true\"></div> -->\n            <div class=\"col-md-8\">{{resumeDataBasics.location.address}}</div>\n        </div>\n        <div class=\"row\" style=\"padding-left:5px\">\n            <!-- <div class=\"col-md-1\"></div> -->\n            <div class=\"col-md-8\">{{resumeDataBasics.location.city}} {{resumeDataBasics.location.countryCode}}</div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div *ngIf=\"resumeDataBasics\" class=\"col-md-8\" style=\"padding-top:15px;\" [innerHtml]=\"resumeDataBasics.summary\"><em>{{resumeDataBasics.summary}}</em></div>\n  <div class=\"col-md-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/resume-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__("./src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_loading__ = __webpack_require__("./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeHeaderComponent = (function () {
    function ResumeHeaderComponent(resumeService) {
        this.resumeService = resumeService;
        this.ANIMATION_TYPES = __WEBPACK_IMPORTED_MODULE_2_ngx_loading__["a" /* ANIMATION_TYPES */];
    }
    ResumeHeaderComponent.prototype.ngOnInit = function () {
        this.getResumeHeaderData();
    };
    // Load top 'basics' section from the resume
    ResumeHeaderComponent.prototype.getResumeHeaderData = function () {
        var _this = this;
        this.resumeService.getResumeDetail("basics").then(function (resumeData) {
            _this.resumeDataBasics = resumeData;
        });
    };
    return ResumeHeaderComponent;
}());
ResumeHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-resume-header",
        template: __webpack_require__("./src/app/resume-header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]) === "function" && _a || Object])
], ResumeHeaderComponent);

var _a;
//# sourceMappingURL=resume-header.component.js.map

/***/ }),

/***/ "./src/app/resume-navigation.component.css":
/***/ (function(module, exports) {

module.exports = "/* The animation code */\n @-webkit-keyframes moveRight {\n    from {padding-left: 0em;}\n    to {padding-left: 0.5em;}\n}\n @keyframes moveRight {\n    from {padding-left: 0em;}\n    to {padding-left: 0.5em;}\n}\n @-webkit-keyframes moveLeft {\n    from {padding-left: 0.5em;}\n    to {padding-left: 0em;}\n}\n @keyframes moveLeft {\n    from {padding-left: 0.5em;}\n    to {padding-left: 0em;}\n}\n .navigation {\n    position: fixed;\n    top: 33%;\n    left: 50px;\n    z-index: 999;\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n    color: #7d7d7d;\n    font-family: myZolano;\n    font-size: 10pt;\n}\n .navigation li:hover {\n    color: #111111;\n     /* padding-left: .5em;  */\n    -webkit-animation-name: moveRight;\n            animation-name: moveRight;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s; \n    -webkit-animation-fill-mode: forwards; \n            animation-fill-mode: forwards;\n}\n .navigation li {\n    cursor: pointer;\n    position: relative;\n    padding-top: .1em;\n    padding-bottom: 0.1em;\n    height: 1.6em;\n    list-style-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk2QTQ0RUM5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk2QTQ0RUQ5NzI4MTFFM0E4NTNBRTI0RDU0Q0U4NjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTZBNDRFQTk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTZBNDRFQjk3MjgxMUUzQTg1M0FFMjRENTRDRTg2MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhgvmygAAACVSURBVHjaYmRAAFEglgBiXij/MxC/AOLXIA4jVFAeiBUZsIP7QPyQGUiIALE6A24gCMRfQApVgZgTKgiy5jbUSpAcN1SclQWJAwJPgfgDkpNEoTQ3E5o1jEiKGJElQCZ+BWI2KF8KSQ6Z/ZUR6hkdBvzgCsjB36AcARyKHgDxM2Yo5wPUCcxQ/BeIP0LD8BlIAUCAAQAEBBbvNAJsuwAAAABJRU5ErkJggg==');\n    -webkit-animation-name: moveLeft;\n            animation-name: moveLeft;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s; \n    -webkit-animation-fill-mode: forwards; \n            animation-fill-mode: forwards;\n}\n .navigation li.selected {\n    list-style-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEzNjNDNzM5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzNjNDNzQ5NzI4MTFFMzhEOUI5RUQ3NDlDQ0M4OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTM2M0M3MTk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTM2M0M3Mjk3MjgxMUUzOEQ5QjlFRDc0OUNDQzg4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr961YUAAABVSURBVHjaYmBAgBAg3gzEz6B4M1QMBdQC8X8cuBamyB+PIhgGqWHYTYRCkBqGl0QofMbEQCQAKbxEhLqrJHkGBOrwKKpDNx4W4E+A+CmUHQqTBAgwABdMO6kaYAQsAAAAAElFTkSuQmCC');\n    color: #111111;\n}\n .navigationMob {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    z-index: 999;\n    list-style-type: none;\n    padding: 0;\n    font-family: myZolano;\n}\n .navigationMob li {\n    position: relative;\n    padding-top: .1em;\n    padding-bottom: 0.1em;\n    height: 1.6em;\n    padding-left: 15px;\n    font-size: 18px;    \n}\n .navigationMob li.selectedMob {\n    color: #7d7d7d;\n}\n .dropdown-menu {\n    min-width: 20em;\n}"

/***/ }),

/***/ "./src/app/resume-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigationMob hidden-md hidden-lg\">\n    <!-- Single button -->\n    <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-default btn-lg dropdown-toggle glyphicon glyphicon-menu-hamburger\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n            <li *ngFor=\"let navItem of navigation\" (click)=\"onSelectNavItem(navItem)\" [class.selectedMob]=\"navItem === selectedNavItem\">\n                {{navItem}}\n            </li>\n        </ul>\n    </div>\n</div>\n\n<ul class=\"navigation hidden-sm hidden-xs\">\n  <li *ngFor=\"let navItem of navigation\" (click)=\"onSelectNavItem(navItem)\" [class.selected]=\"navItem === selectedNavItem\">\n    {{navItem | uppercase}}\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/resume-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__("./src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeNavigationComponent = (function () {
    function ResumeNavigationComponent(resumeService, router) {
        this.resumeService = resumeService;
        this.router = router;
    }
    ResumeNavigationComponent.prototype.ngOnInit = function () {
        this.getTopLevelResumeEntries(1);
    };
    // Load top level entries and use them for navigation
    ResumeNavigationComponent.prototype.getTopLevelResumeEntries = function (from, to) {
        var _this = this;
        if (from === void 0) { from = 0; }
        this.resumeService.getTopLevelResumeData().then(function (resumeTopLevelData) {
            _this.navigation = resumeTopLevelData.slice(from, to);
            console.log(_this.navigation);
        });
    };
    ResumeNavigationComponent.prototype.onSelectNavItem = function (item) {
        this.selectedNavItem = item;
        this.router.navigate(["/resume-content", item]);
    };
    return ResumeNavigationComponent;
}());
ResumeNavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-resume-navigation",
        template: __webpack_require__("./src/app/resume-navigation.component.html"),
        styles: [__webpack_require__("./src/app/resume-navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ResumeNavigationComponent);

var _a, _b;
//# sourceMappingURL=resume-navigation.component.js.map

/***/ }),

/***/ "./src/app/resume-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_content_component__ = __webpack_require__("./src/app/resume-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// The routes of the website and how they match to different components
var routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "resume-content/:resumeItem", component: __WEBPACK_IMPORTED_MODULE_2__resume_content_component__["a" /* ResumeContentComponent */] },
];
var ResumeRoutingModule = (function () {
    function ResumeRoutingModule() {
    }
    return ResumeRoutingModule;
}());
ResumeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ResumeRoutingModule);

//# sourceMappingURL=resume-routing.module.js.map

/***/ }),

/***/ "./src/app/resume.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_resume__ = __webpack_require__("./src/app/mock-resume.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResumeService = (function () {
    function ResumeService(http) {
        this.http = http;
        this.resumeServiceURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].webServiceUrl;
    }
    // getResumeData(): Promise<Resume> {
    //     return this.http.get(this.resumeServiceURL).toPromise().then(
    //         response => {
    //             return JSON.parse(response.json()) as Resume;
    //         }
    //     ).catch(
    //         error => this.handleError
    //     );
    // }
    // getTopLevelResumeData(from: number = 0, to: number = undefined): Promise<string[]> {
    //     return this.http.get(`${this.resumeServiceURL}/topics`).toPromise().then(
    //         response => {
    //             console.log("RESPONSE data: " + JSON.parse(response.json()));
    //             return JSON.parse(response.json());
    //         }
    //     ).catch(
    //         error => this.handleError
    //     );
    // }
    // getResumeDetail(identifier: string): Promise<{}> {
    //     console.log("ResumeService identifier: " + identifier);
    //     return this.http.get(`${this.resumeServiceURL}/${identifier}`).toPromise().then(
    //         response => {
    //             return JSON.parse(response.json());
    //         }
    //     ).catch(
    //         error => this.handleError
    //     );
    // }
    ResumeService.prototype.getResumeData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__mock_resume__["a" /* resume_data */]);
    };
    ResumeService.prototype.getTopLevelResumeData = function () {
        return this.getResumeData().then(function (resume_data) {
            return Object.keys(resume_data);
        });
    };
    ResumeService.prototype.getResumeDetail = function (identifier) {
        console.log("ResumeService identifier: " + identifier);
        return this.getResumeData().then(function (resume_data) { return resume_data[identifier]; });
    };
    ResumeService.prototype.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ResumeService;
}());
ResumeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ResumeService);

var _a;
//# sourceMappingURL=resume.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    webServiceUrl: "http://localhost:3000/v1/resume"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map