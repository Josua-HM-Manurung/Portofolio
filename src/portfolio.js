/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Josua Manurung",
  title: "Hi all, I'm Josua",
  subTitle: emoji(
    "A passionate Cloud, Network, and Web Developer Engineer 🚀 with experience in designing, implementing, and managing cloud infrastructure, enterprise networking, and modern web applications."
  ),
    resumeLink:
    "https://drive.google.com/file/d/1ZZaDp3mshUnnEx97hXdBvMwGWZkpkvXJ/view ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Josua-HM-Manurung",
  linkedin: "https://www.linkedin.com/in/josua-manurung-56492135b/",
  gmail: "josuahmmanurng170807@gmail.com",
  gitlab: "https://gitlab.com/josuahmmanurng170807",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE CLOUD, NETWORKING & WEB DEVELOPER WHO LOVES BUILDING, DEPLOYING, AND OPTIMIZING MODERN IT SOLUTIONS 🚀",
  skills: [
    emoji(
      "⚡ Design and deploy scalable cloud and virtualized infrastructures using VMware and cloud platforms"
    ),
    emoji("⚡ Configure, manage, and troubleshoot enterprise networks using Cisco technologies and networking protocols"),
    emoji(
      "⚡ Implement monitoring, automation, and system optimization for cloud, network, and web environments"
    ),
    emoji(
      "⚡ Implementasion frontend web development using HTML, CSS, JavaScript, and React.js to create responsive and user-friendly interfaces"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
    skillName: "VMware",
    fontAwesomeClassname: "fas fa-server"
    },
    {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
    },
    {
    skillName: "Cisco",
    fontAwesomeClassname: "fas fa-network-wired"
    },
    {
    skillName: "Cloud Computing",
    fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
    skillName: "Figma",
    fontAwesomeClassname: "fab fa-figma"
    },
    {
    skillName: "Cyber Security",
    fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Del Institute of Technology",
      logo: require("./assets/images/del.jpg"),
      subHeader: "Bachelor of Computer Technology",
      duration: "August 2024 - September 2027",
      desc: "Pursuing a Bachelor's degree in Computer Technlogy with a focus on Cloud Computing, Computer Networks and Virtualization.",
      descBullets: [
          "Studying cloud infrastructure, virtualization, and enterprise networking technologies.",
          "Developing web-based applications and distributed systems using modern technologies.",
          "Participating in academic projects involving VMware, Cisco Networking, Linux Administration, and Apache Kafka."
      ]
    }    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Virtualization & Cloud Computing",
      progressPercentage: "75%"
    },
    {
      Stack: "Networking",
      progressPercentage: "70%"
    }    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student",
      company: "Computer Technology",
      companylogo: require("./assets/images/himatek.png"),
      date: "August 2024 – Present",
      desc: "Active member of the Computer Technology Student Association, contributing to academic and technology-related activities while enhancing technical and teamwork skills.",
      descBullets: [
         "Participated in technology workshops, seminars, and student development programs.",
         "Collaborated with fellow students in organizing academic and technical events.",
         "Engaged in projects related to networking, cloud computing, and software development."
      ]
    },
   {
      role: "Member",
      company: "Department of Sains and Technology",
      companylogo: require("./assets/images/diptek.png"),
      date: "January 2025 – Present",
      desc: "Contributing to technology-driven initiatives and supporting innovation within the Department of Science and Technology.",
      descBullets: [
          "Participated in research and technology development activities.",
          "Assisted in organizing workshops and technical training programs.",
          "Worked on projects involving development campus website bem.del.ac.id."
      ]
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bem.png"),
      projectName: "Website BEM Del Institute of Technology",
      projectDesc:  "A web platform developed to support organizational activities, information dissemination, and communication between the Student Executive Board (BEM) and students of Del Institute of Technology.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bem.del.ac.id/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/UI.png"),
      projectName: "UI/UX Design for Rent Car Application",
      projectDesc:  "Make a design for a car rental application with a user-friendly interface and intuitive navigation, ensuring a seamless experience for users to browse, select, and book rental vehicles efficiently.",
      footerLink: [
        {
          name: "Visit Prototype",
          url: "https://www.figma.com/design/dO70UvI5jFFMhuQQYOJmwl/mk?node-id=0-1&p=f&t=epiuA8swHlgkcbTx-0"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pa.png"),
      projectName: "Implementation Apache Kafka and Raft Algoritm ",
      projectDesc:  "A distributed cinema ticket booking system designed to handle high-concurrency transactions using Apache Kafka for asynchronous communication and the Raft algorithm for cluster coordination and consistency..",
      footerLink: [

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sister.png"),
      projectName: "Implementation Replication Database and Failover in Distributed System",
      projectDesc:  "A web platform developed to support organizational activities, information dissemination, and communication between the Student Executive Board (BEM) and students of Del Institute of Technology.",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/FolkStories.png"),
      projectName: "FolkStories",
      projectDesc: "A web-based platform designed to preserve and introduce Indonesian folklore through an interactive digital experience. Users can explore traditional stories, legends, and cultural heritage presented in a modern and engaging interface.",
      footerLink: [

      ]
    },
    {
      image: require("./assets/images/SmartBath.png"),
      projectName: "Smartbath Prototype Sistem (Embedeed System)",
      projectDesc: "An IoT-based smart bathroom prototype that integrates multiple sensors and microcontrollers to automate environmental monitoring and device control for improved efficiency and user convenience.",
      footerLink: [

      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HUAWEI DATACOM",
      subtitle:
        "Completed Huawei HCIA-Datacom V1.0 training, covering fundamental networking concepts, routing, switching, and enterprise network infrastructure.",
      image: require("./assets/images/HUAWEI DATACOM.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "HUAWEI DATASTORAGE",
      subtitle:
        "Completed Huawei HCIA-Storage V5.0 training, focusing on storage technologies, data management, and storage solutions.",
      image: require("./assets/images/HUAWEI DATASTORAGE.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },

    {
      title: "HUAWEI NETWORK",
      subtitle: "Completed Huawei Computer Networks course, gaining knowledge in network design, protocols, and infrastructure management.",
      image: require("./assets/images/HUAWEI Network.png"),
      imageAlt: "PWA Logo",
      footerLink: [
      ]
    },
    {
      title: "WRITER GRAF BOOK",
      subtitle:
        "Recognized for contributions in writing and publishing activities, demonstrating creativity and communication skills.",
      image: require("./assets/images/Graf WRITER.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "GEMASTIK",
      subtitle:
       "Participated in GEMASTIK, Indonesia's national student competition in information and communication technology.",
      image: require("./assets/images/GEMASTIK 2025.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "n8n Automation",
      subtitle:
        "Completed automation training using n8n, focusing on workflow automation and system integration.",
      image: require("./assets/images/n8n.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "CyberSecurity",
      subtitle:
        "Completed cybersecurity training covering security fundamentals, threat mitigation, and secure computing practices.",
      image: require("./assets/images/KOMDIGI CySec.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "LINUX",
      subtitle:
        "Completed Linux system administration training, including command-line operations, system management, and server configuration.",
      image: require("./assets/images/KOMDIGI LINUX.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
        {
      title: "Matriculation",
      subtitle:
        "Successfully completed the matriculation program, strengthening foundational knowledge for higher education studies.",
      image: require("./assets/images/Matriculation.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
   {
      title: "Media Cloud",
      subtitle:
        "Completed cloud computing and digital media training, focusing on cloud services, digital platforms, and modern technology solutions.",
      image: require("./assets/images/MediaCloud.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    {
      title: "Essay Competition",
      subtitle:
        "Received recognition in an essay competition for analytical thinking, research, and academic writing skills.",
      image: require("./assets/images/Essay.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "Instagram : josua_hm_",
  email_address: "mail : josuahmamnurng170807@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};


