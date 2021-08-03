const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nasbeer Ahammed | Portfolio",
  description:
    "A Data Scientist who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Nasbeer Ahammed",
    type: "website",
    url: "http://nasbeer.com/",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Nasbeer Ahammed",
  // logo_name: "Nasbeer Ahammed",
  resumeLink:
    "https://drive.google.com/file/d/1Sc_h5840nHwTD8CRQm1GATgHdL3r-PNz/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "black",
      },
      profileLink: "https://github.com/nasbeer",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      //iconifyClassname:"simple-icons:fa-hackerrank",
      style: {
        color: "#0c141e",
        borderRadius: "8px",
      },
      profileLink: "https://www.hackerrank.com/nazbeer_ahammed",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "#",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "#",
    // },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
        borderRadius: "8px",
      },
      profileLink: "https://www.linkedin.com/in/nazbeerahammed/",
    },
    // {
    //   siteName: "HashNode",
    //   iconifyClassname: "simple-icons:hashnode",
    //   style: {
    //     color: "#2962ff",
    //   },
    //   profileLink: "",
    // },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Analytical and statistical projects, News Aggregators, Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap, MaterialUI, ReactJS, JavaScript",
        "⚡ Creating application backend in Python, Laravel 8, PHP 7.x, Node, Django & Streamlit",
        "⚡ Having experience in Domain & Hosting using GoDaddy, Heroku, AWS & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "MaterialUI",
          fontAwesomeClassname: "logos:material-ui",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#15add6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Specialist",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing outdated UI design and its components",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product development and design",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#460033",
        //   },
        // },
        {
          skillName: "Illustrator",
          fontAwesomeClassname: "file-icons:adobe-illustrator",
          style: {
            color: "#b34e00",
            // borderRadius:'10px',
            // border:"3px solid #42322a",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "vscode-icons:file-type-photoshop",
          style: {
            // color: "#0ba2de",
            // color:'#fff',
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Zeplin",
          fontAwesomeClassname: "logos:zeplin",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "What did I do ?",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science, React, Django, Wordpress projects and deploy them to web applications using cloud and shared infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "CoWIN Slot Checker",
      // img_path: "project-06.png",
      description:
        "Script to check the available slots for Covid-19 Vaccination Centers from CoWIN API in India.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        // {
        //   lang: "TextBlob",
        //   color: "#820032",
        // },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://cowinslotchecker.herokuapp.com/ ",
      code: "https://github.com/nasbeer/cowin-vaccination-slot-availability/",
      linkcolor: "white",
    },
    {
      title: "Youtube Video Downloader",
      // img_path: "project-02.png",
      description:
        "Youtube downloader is an application to download recorded videos from YouTube using Python Django",
      tags: [
        {
          lang: "django",
          color: "green",
        },
        {
          lang: "python",
          color: "red",
        },

        {
          lang: "docker",
          color: "darkred",
        },
        {
          lang: "heroku",
          color: "#00072D",
        },
      ],
      link: "https://ytdlnaz.herokuapp.com/",
      code: "https://github.com/nasbeer/Youtube-Downloader",
      linkcolor: "white",
    },
    {
      title: "Trading Application - Naztrading",
      // img_path: "voice.gif",
      description:
        "Python module to get stock data/cryptocurrencies from the Alpha Vantage API",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "pyplot",
          color: "#4257f5",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    // {
    //   title: "NeuralViz",
    //   // img_path: "neural.gif",
    //   description:
    //     "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "numpy",
    //       color: "#8700b0",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://neuralviz.herokuapp.com/",
    //   code: "https://github.com/nazbeerahammed/neuralviz",
    //   linkcolor: "white",
    // },
    {
      title: "Fake News Detector",
      // img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "anaconda",
          color: "green",
        },
        {
          lang: "jupyter",
          color: "red",
        },
        {
          lang: "notebook",
          color: "purple",
        },
        {
          lang: "Python",
          color: "#ff4b4b",
        },
      ],
      //link: "https://github.com/nasbeer/fakenewsdetector",
      code: "https://github.com/nasbeer/fakenewsdetector",
      linkcolor: "white",
    },

    {
      title: "Newsrefined",
      // img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newsapi",
          color: "#303030",
        },
        {
          lang: "django",
          color: "#ff4b4b",
        },
        {
          lang: "pythoneverywhere",
          color: "#051c61",
        },
      ],
      link: "https://nasbeer.pythoneverywhere.com/",
      code: "https://github.com/nasbeer",
      linkcolor: "white",
    },
    {
      title: "Random Chat Application",
      // img_path: "acti.gif",
      description: "Twilio SDK Starter Application for Node.js",
      tags: [
        {
          lang: "react",
          color: "#004782",
        },
        {
          lang: "NodeJS",
          color: "#c47206",
        },
        {
          lang: "Twilio",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://chatapp-tw.herokuapp.com/chat/",
      code: "https://github.com/nasbeer/chatapp-twilio",
      linkcolor: "white",
    },
    {
      title: "Jubna New Advertiser & Publisher platform",
      // img_path: "project-02.png",
      description: "Created using JavaScript and Laravel 8",
      tags: [
        {
          lang: "internal projects",
          color: "blue",
        },
        {
          lang: "javascript",
          color: "#ff4b4b",
        },
        {
          lang: "laravel 8",
          color: "orange",
        },
      ],
      link: "https://jubna.com",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Jubna New Website",
      // img_path: "project-02.png",
      description: "Developed new website for company",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "wordpress",
          color: "blue",
        },
      ],
      link: "https://website.jubna.me",
      //code: "",
      linkcolor: "white",
    },
    {
      title: "Clinical Management System",
      // img_path: "project-02.png",
      description:
        "The platform is used in a private clinic with inventory, HR, Patient-Doctor Records, Medicine records and all other related data.",
      tags: [
        {
          lang: "django",
          color: "green",
        },
        {
          lang: "python",
          color: "red",
        },
        {
          lang: "MySQL",
          color: "orange",
        },
        {
          lang: "PyJWT",
          color: "purple",
        },
        {
          lang: "heroku",
          color: "#00072D",
        },
      ],
      link: "",
      code:
        "https://github.com/nasbeer/Clinic_Management_System_Project_Django",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Project Manager, UIUX Specialist & Data Scientist",
        subtitle: "DigiMena FZE (Jubna.com)",
        date: "April 2020 - present",
        content: [
          "Revamping the present Jubna platform with new UI",
          "Created new tools which will enhance more business to the company",
          "Created aggregators for different platforms using python and django",
          "Created Wordpress plugins for Jubna",
          "Creating new Algorithms for new platform",
          "Improving the UI of the present platform",
          "Developing the New Jubna platform using Laravel 8",
          "Creating case studies for the company.",
          "News Aggregator using Python and Django",
          "Managing my team team members across different projects.",
          "Created Chatapp and deployed in Heroku.",
          "Developing Community Forum using ReactJS and NodeJS",
        ],
      },
      {
        title: "Wordpress & UI Developer",
        subtitle: "TPConnects Technologies LLC",
        date: "January 2020 - April 2020",
        content: [
          "Creating a bespoke Wordpress plugin for the Airline Management B2C platform",
          "APIs from IATA, Amedeus, Gallelio, Viator, and other key suppliers are being used.",
          "5 B2C platforms and websites received updated WordPress user interfaces.",
          "Two B2C platforms were successfully implemented for two significant clients.",
          "Developed custom Airline Management System in Wordpress and AngularJS",
        ],
      },
      {
        title: "Full Stack Developer(Freelance Contract)",
        subtitle: "Walayem/Yolo Emirates",
        date: "November 2019 - January 2020",
        content: [
          "Developed a multilingual(English & Arabic) Wordpress site for Yolo Emirates and Walayem",
          "Fixed bugs in iOS application of Walayem",
        ],
      },
      {
        title: "Sr Full Stack Developer & UIUX Designer",
        subtitle: "Expibotz Technologies Private Limited",
        date: "November 2012 - August 2019",
        content: [
          "Payroll software, a school management system, and a clinical management system, to name a few",
          "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
          "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
          "Ranked 85 out of 1500+ students for overall performance.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Electronics & Communication",
          subtitle: "Younus College of Engineering & Technology",
          //    date: "2016 - 2020",
          content: ["CGPA: 3.4/5"],
        },
        // {
        //   title: "High  Certificate [CBSE]",
        //   subtitle: "Angels Arc Senior Secondary School",
        // //  date: "2014 - 2016",
        //   content: ["Precentage: 70%"],
        // },
      ],
    },
    // {
    //   title: ["Ranks and Achivements"],
    //   data: [
    //     {
    //       title: "Ranks",
    //       content: [
    //         "Runnerup in KSEB - Startup Village Android App Hackathon",
    //         "#113/5064 in CV-NLP Hackathon by HackerEarth",
    //       ],
    //     },
    //     {
    //       title: "Achievements",
    //       content: [
    //         "Designing Team Head at ACM-VIT",
    //         "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
    //         "Tableau Analyst & Consumer Badge by Tableau Official",
    //       ],
    //     },
    //   ],
    // },
    {
      title: ["Freelance Works"],
      data: [
        {
          title: "Software Development Company",
          subtitle: "expibotz.com",
          content: [
            "Designed and developed website for Expibotz",
            "Designed Logo, Brochures, Flyers and other illustrations",
            "Developed many softwares for Newspaper agencies, Healthcare clinics, IT Service offices etc",
          ],
        },
        {
          title: "Educational Consultancy",
          subtitle: "redbudinternational.com",
          content: [
            "Created and hosted a website for educational consultancy in Study Abroad & PR Domain",
            "Designed Logo, Brochures, Flyers and other illustrations",
          ],
        },
        // {
        //   title: "Coworking Space",
        //   subtitle: "theofficekochi.com",
        //   content: [
        //     "Developed a website and provided services on SEO and UI Elements for Coworking Space provider ",
        //     "Provided hosting and security supports with Social media marketing."
        //   ],
        // },
        {
          title: "eLearning Platform",
          subtitle: "edugraff.com",
          content: [
            "Developed an eLearning platform for High School students and teachers",
            "Provided hosting and security supports with Search Engine Optimization.",
            "Integrated Whiteboard facility for teachers using NodeJS",
          ],
        },
        {
          title: "Fitout Company",
          subtitle: "fitoutdubai.co",
          content: [
            "Developed a website and provided services on SEO and UI Elements for Fit out company in Dubai ",
            "Provided hosting and security supports with Social media marketing.",
          ],
        },
        {
          title: "Branding & Advertising Company",
          subtitle: "pacianoart.com",
          content: [
            "Developed custom UIUX for the site as per the client requirement",
            "Developed the site using Wordpress with theme customization",
            "Provided hosting and security supports with Search Engine Optimization.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Data Science Foundation",
      subtitle: "IBM",
      //logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/504886d6-ed1c-41bf-a2c1-692fcbaf2d3f/linked_in_profile",
      alt_name: "IBM Data Scientist Nasbeer",
      color_code: "#000000",
    },
    {
      title: "SQL",
      subtitle: "HackerRank",
      //logo_path: "tabana-01.png",
      certificate_link: "https://www.hackerrank.com/certificates/e5d517b88486",
      alt_name: "Hackerrank Nasbeer",
      color_code: "#000000",
    },
    {
      title: "CSS",
      subtitle: "HackerRank",
      // logo_path: "tabcon-01.png",
      certificate_link: "https://www.hackerrank.com/certificates/c36608dccf63",
      alt_name: "Hackerrank Nasbeer",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      // logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/certificates/f3671f339a4a",
      alt_name: "HackerRank Nasbeer",
      color_code: "#000000",
    },
    {
      title: "Fake News Detection with Machine Learning",
      subtitle: "Coursera Projects",
      //logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VLYXK79C39CD",
      alt_name: "Coursera Nasbeer",
      color_code: "#000000",
    },
    {
      title: "Foundations: Google Data Analyst Certification",
      subtitle: "Coursera",
      //logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/D4QYZL45KESG",
      alt_name: "Coursera Nasbeer",
      color_code: "#000000",
    },
    {
      title: "G Suite Admin Fundamentals",
      subtitle: "Coursera",
      //logo_path: "udemy-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/65QRY6M7WGNU",
      alt_name: "Coursera Nasbeer",
      color_code: "#000000",
    },
    {
      title: "Deep Learning Fundamentals",
      subtitle: "SimpliLearn",
      // logo_path: "coursera-01.png",
      certificate_link: "https://certificates.simplicdn.net/share/1409501.pdf",
      alt_name: "SimpliLearn",
      color_code: "#000000",
    },
    {
      title: "Introduction to Artificial Intelligence",
      subtitle: "SimpliLearn",
      // logo_path: "coursera-01.png",
      certificate_link: "https://certificates.simplicdn.net/share/1331917.pdf",
      alt_name: "SimpliLearn",
      color_code: "#000000",
    },
    {
      title: "React JS With Node & Express Server",
      subtitle: "Udemy",
      // logo_path: "datacamp-01.png",
      certificate_link: "https://www.udemy.com/certificate/UC-VMNYT0H5/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Connect me :-)",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Data Science, Python, React, Wordpress, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Silicon Gates 1, Dubai Silicon Oasis, UAE",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+971 5247 62486",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nasbeer",
    // iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-brands fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "orange", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nazbeerahammed/",
    fontAwesomeIcon: "fa-brands fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nazbeer.ahammed",
    fontAwesomeIcon: "fa-brands fa-facebook", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/user/nazbeerahammed",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:nazbeer.ahammed@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nasbeer.codes/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
