import project1 from "../projects/project-1.webp";
import project2 from "../projects/project-2.webp";
import project3 from "../projects/project-3.webp";
import project4 from "../projects/project-4.webp";
import project5 from "../projects/project-5.webp";
import project6 from "../projects/project-6.webp";

export const HERO_CONTENT = 
`I am a Full Stack Developer with a strong ability to align technical solutions with business goals, 
driving efficiency and user satisfaction. I excel in optimizing performance, 
enhancing user experiences, and collaborating with cross-functional teams to deliver impactful projects.
 `

export const ABOUT_TEXT = `
I bring a versatile skill set, with a deep understanding of business culture and needs, gained from managing businesses across Europe. Multilingual and adept at quickly mastering new technologies, I excel at delivering innovative solutions that align with strategic goals and drive impactful results.


`;
export const experience = [
  {
    title: "Junior Software Developer | Full Stack Developer ",
    company: "Personal Projects",
    location: "Austin, Texas Metropolitan Area",
    duration: "Jan 2024 - Present",
    responsibilities: [
      "Designed and developed multiple full-stack web applications, demonstrating a strong ability to quickly learn and adapt to new technologies.",
      "Created responsive and user-friendly interfaces with React, ensuring optimal performance across various devices.",
      "Enhanced application efficiency by implementing performance optimizations, leading to faster load times and smoother user experiences.",
      "Integrated third-party APIs, including Google Books API, to extend application functionality and improve user engagement.",
      "Independently managed project timelines, from initial concept through deployment, ensuring high-quality deliverables.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title:
      "Luxury Team Director | Customer Experience | Sales Optimization Specialist",
    company: "Estee Lauder Companies Europe",
    location: "Stockholm, Sweden",
    duration: "January 2016 - December 2021",
    responsibilities: [
      "Aligned customer experience initiatives with marketing campaigns, resulting in a 40% annual sales increase.",
      "Enhanced customer satisfaction by 35% through a comprehensive feedback system.",
      "Led a diverse team to a 50% productivity increase by introducing team-building workshops and performance reviews.",
      "Developed a comprehensive onboarding program with modules on luxury product knowledge, sales techniques, and communication skills.",
      "Navigated international business cultures to streamline operations and enhance cross-cultural communication.",
    ],
  },
  {
    title: "Customer Relationship Management Specialist",
    company: "Carlson Rezidor Hotel Group",
    location: "Helsinki, Finland",
    duration: "January 2015 - December 2015",
    responsibilities: [
      "Utilized Salesforce CRM to monitor performance and identify new business opportunities, contributing to a 25% increase in lead conversion.",
      "Improved client retention by 20% through personalized sales and marketing strategies.",
      "Secured new business opportunities, leading to a 15% revenue growth.",
      "Analyzed customer data using data mining tools, increasing campaign effectiveness by 30%.",
    ],
  },
  {
    title: "Refugee Coordinator",
    company: "City of Helsinki, Social Affairs Office",
    location: "Helsinki, Finland",
    duration: "May 2008 - January 2012",
    responsibilities: [
      "Coordinated national asylum seeker programs, ensuring efficient processes and compliance with regulations.",
      "Provided support, guidance, and instruction to refugees on legal processes and community integration.",
      "Established new processes to ease refugee assimilation in Finland, improving access to essential services.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Rent-Ride",
    Image: project1,
    description: [
      "Built a full-stack car rental app using React, Node.js, Express, and MongoDB.",
      "Integrated GraphQL and Apollo Client for secure bookings.",
      "Improved load times by 20%.",
      "Focused on optimizing user experience and performance for scalable usage.",
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
  address: "Pflugerville, TX, USA ",
  phoneNo: "+1 (512) 767-4062",
  email: "FgsDeve@gmail.com",
}

export const GitHub=  "https://github.com/fgsdeve"
export const Linkedln = "https://www.linkedin.com/in/francggarcia/"