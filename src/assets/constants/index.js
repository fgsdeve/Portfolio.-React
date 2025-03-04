import project1 from "../projects/project-1.webp";
import project2 from "../projects/project-2.webp";
import project3 from "../projects/project-3.webp";
import project4 from "../projects/project-4.webp";
import project5 from "../projects/project-5.webp";
import project6 from "../projects/project-6.webp";

export const HERO_CONTENT = 
`I’m a Software Engineer passionate about building fast, user-friendly web applications. I specialize in front-end development, optimizing performance, and collaborating with teams to turn ideas into seamless digital experiences.

Strong problem-solving, adaptability, and teamwork are my superpowers—because let’s be honest, debugging is just an extreme puzzle game. Let’s build something great (and keep the bugs to a minimum)!
`

export const ABOUT_TEXT = `I bring a multifaceted skill set, having worked with businesses across Europe, and I know how to adapt quickly to new challenges. Fluent in multiple languages, I’ve mastered the art of blending tech with business needs to create solutions that actually make a difference. Let’s face it, it’s all about finding the right balance between tech and people, right?
`;
export const experience = [
  {
    title: "AI Training Specialist | Freelancer ",
    company: "Outlier",
    location: "Austin, TX",
    duration: "Jun 2024 - Present",
    responsibilities: [
      "Performed comprehensive code reviews and amendments, enhancing accuracy by 95% and notably reducing errors, showcasing strong problem-solving skills.",
      "Developed efficient fact-checking processes , reducing fact-checking time by 40% and increasing productivity by 25%.",
      "Implemented rigorous proof reading and review processes , achieving a 99% correction rate for spelling mistakes and improving overall text quality.",
      "Conducted thorough property reviews and corrections, resulting in a 92% improvement in property accuracy and a significant reduction in errors.",
      "Did comprehensive reviews and corrections, resulting in a 90% improvement in overall quality and a significant reduction in errors and inaccuracies.",
    ],
    
  },
  {
    title:
      "Customer Success Manager",
    company: "Estee Lauder Companies Europe",
    location: "Stockholm, Sweden",
    duration: "Nov 2017 – Marc 2022",
    responsibilities: [
      "Devised strategic account plans addressing customer needs, boosting adoption and expansion by 45% year on year.",
      "Increased customer retention by 75% with varied customer service strategies.",
      "Boosted customer satisfaction by 90% through the implementation of mitigation strategies for technical and delivery issues.",
      "Managed and optimized product solutions to enhance customer satisfaction and loyalty by 30%.",
      "Led collaborative efforts with marketing, sales, and operations teams to align with customer goals.",
    ],
  },
  {
    title: "Customer Success Associate ",
    company: "Estee Lauder Companies Europe",
    location: "Helsinki, Finland",
    duration: " Jan 2016 – Nov  2017",
    responsibilities: [
      "Led improvements in customer experience, boosting business value and brand reputation by 35%.",
      "Directed team collaboration to align marketing, sales, and operations with customer objectives.",
      "Used storytelling techniques to effectively communicate complex product features, resulting in a 65% boost in customer satisfaction and loyalty.",
      "Leveraged relationship-building expertise to establish long-term partnerships with key clients, driving a 75% increase in customer loyalty.",
    ],
  },
  {
    title: "Customer Relationship Management Specialist",
    company: "Carlson Rezidor Hotel Group",
    location: "Helsinki, Finland",
    duration: "January 2015 - December 2015",
    responsibilities: [
      "Optimized customer experience using CRM tools (Salesforce, HubSpot), driving a 20% increase in contract renewals and overall customer success.",
      "Anticipated customer needs and proactively addressed risks, ensuring smooth service delivery and alignment with business goals.",
      "Facilitated cross-functional collaboration between sales, operations, and marketing teams to enhance customer outcomes and streamline go to market strategies.",
      "Executed strategic marketing and sales initiatives, increasing client engagement and improving customer health scores",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Rent-Ride (Full-Stack Car Rental App - Group Project)",
    Image: project1,
    description: [
      "Developed a full-stack car rental application using React, Node.js, Express, and MongoDB.",
      "Integrated GraphQL and Apollo Client to enable secure and efficient booking management.",
      "Optimized application performance, reducing load times by 20% for a smoother user experience.",
      "Focused on UI/UX enhancements and scalability to ensure seamless usability across devices.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "Apollo Client",
    ],
    links: {
      liveDemo: "https://rent-ride-jzpq.onrender.com/",
      repo: "https://github.com/14jjfenlason/car-rental.git",
    },
  },
  {
    title: "MERN Book Search Engine",
    Image: project2,
    description: [
      "Integrated Google Books API for real-time search, enhancing user engagement.",
      "Delivered a fully responsive design across devices, ensuring seamless user experience.",
      "Optimized search functionality, boosting performance by 30% and reducing load times for a more efficient application.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Books API",
    ],
    links: {
      liveDemo: "https://mern-book-search-engine-2-1cso.onrender.com/",
      repo: "https://github.com/fgsdeve/MERN-Book-Search-Engine.git",
    },
  },
  {
    title: "Cryptocurrency Tracking Platform",
    Image: project3,
    description: [
      "Developed a cryptocurrency tracking platform using React.",
      "Integrated real-time data APIs, enhancing data accuracy by 20%.",
      "Improved UI/UX design, leading to a 35% increase in usability.",
      "Optimized for responsiveness, ensuring smooth performance across various devices.",
    ],
    technologies: ["React", "Real-Time APIs"],
    links: {
      liveDemo: "https://crypto-maven.onrender.com",
      repo: "https://github.com/fgsdeve/Crypto-Maven",
    },
  },
  {
    title: "Flavor Fleet Food App",
    Image: project4,
    description: [
      "Developed a responsive front-end with advanced state management and secure UI,leveraging modern frameworks.",
      "Built a robust back-end, integrating secure image storage and authentication.",
      "Automated CI/CD pipelines to streamline workflows and ensure reliable updates, enhancing overall performance.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Auth0",
      "Cloudinary",
      "Multer",
      "JWT",
      "GitHub Actions",
    ],
    links: {
      frontendRepo: "https://github.com/fgsdeve/FlavorFleet.com-frontend.git",
      backendRepo: "https://github.com/fgsdeve/FlavorFleet.com-backend.git",
      liveDemo: "https://flavorfleet-com-frontend.onrender.com/",
    },
  },
  {
    title: "Social Network API",
    Image: project5,
    description: [
      "Built a RESTful API for a social network using Node.js, Express, and MongoDB.",
      "Implemented CRUD operations for users, thoughts, and reactions.",
      "Integrated Mongoose for data modeling.",
      "Focused on modular code and API performance optimization.",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    links: {
      repo: "https://github.com/fgsdeve/social-network-api",
    },
  },
  {
    title: "SQL Employee Tracker",
    Image: project6,
    description: [
      "Developed a command-line application to manage employee data using SQL queries.",
      "Optimized CRUD operations, reducing query execution time by 30%.",
      "Ensured efficient data storage and retrieval with MySQL.",
      "Demonstrated strong skills in SQL, database management, and back-end development.",
    ],
    technologies: ["Node.js", "MySQL", "Inquirer"],
    links: {
      repo: "https://github.com/fgsdeve/SQL-Employee-Tracker",
    },
  },
];
export const CONTACT = {
  address: "Birmingham, AL",
  phoneNo: "+1 (512) 767-4062",
  email: "FgsDeve@gmail.com",
}

export const GitHub=  "https://github.com/fgsdeve"
export const Linkedln = "https://www.linkedin.com/in/francggarcia/"