import { Resume } from "./classes/resume";

export const resume_data: Resume = {
  "basics": {
    "name": "Thorsten Bux",
    "label": "Software Engineer",
    "picture": "./assets/Thorsten_circle-grey.png",
    "email": "thorsten.bux@outlook.com",
    "phone": "+64 2040921033",
    "url": "https://augmentmy.world",
    "summary": "<em><strong>With all I do, I believe in empowering people. I believe in exciting technology.</strong>\
     The way I empower people is by designing solutions which are easy to understand inspiring and exciting to use.<br>\
      I create great software.<br><br> With more than seven years of work experience in information technology, I have a\
       profound knowledge in software engineering and solution design. In the last two years, I created live changing products\
        using Augmented Reality and shaped an Open Source software product. Before that I took pride in realizing Internet of\
         Things (IoT) products for various industries.</em>",
    "location": {
      "address": "337 Mt. Pleasant Road",
      "postalCode": "8081",
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
      "company": "Eden Networks Limited",
      "description" : "The Augmented Reality Software Professionals",
      "position": "Software Engineer - ARToolKit",
      // "url": "https://piedpiper.com",
      "startDate": "2015-12-01",
      "endDate": "current",
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
      "description" : "Experts for the Internet of Things",
      "position": "Software Engineer, Project Manager, Product Owner, Business Analyst - IoT Projects",
      // "url": "https://piedpiper.com",
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
      "description" : "Experts for the Internet of Things",
      "position": "Project Manager, Scrum Master, User Experience responsible - Telemedicine project",
      // "url": "https://piedpiper.com",
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
      "description" : "Experts for the Internet of Things",
      "position": "Head of Development, Technical Consultant - Vehicle diagnosis and repair software project",
      // "url": "https://piedpiper.com",
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
      "description" : "Experts for the Internet of Things",
      "position": "Software Engineer – Vehicle diagnosis and repair software project",
      // "url": "https://piedpiper.com",
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
      "description" : "Experts for the Internet of Things",
      "position": "Master Thesis",
      // "url": "https://piedpiper.com",
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
      "name": "ARToolKit6",
      "description": "Create a new version of the famous ARToolKit5 framework",
      "highlights": ["Android camera calibration app",
                  "Unity3D plugin",
                  "Continuous integration and delivery chain",
                  "QT desktop application"],
      // keywords: ["Android"],
      "startDate": "2016-03-01",
      "endDate": "2017-07-28",
      "url": "artoolkit.org",
      "roles": ["Software engineer", "Release manager", "Social Media representative"],
      "company": "Eden Networks"
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
      "company": "Eden Networks"
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
        "OpenShift"
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
      "language" : "German",
      "fluency" : "native language"
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
