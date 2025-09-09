export const personalInfo = {
  name: "Shivam Tripathi",
  location: "Bhopal, India",
  email: "shivam1705of@gmail.com",
  github: "https://github.com/shivam261",
  linkedin: "https://www.linkedin.com/in/iamlio/",
  leetcode: "https://leetcode.com/u/shivam1705of/",
};

export const workExperience = [
  {
  company: "L&T Infotech Mindtree (LTIMindtree) ",
  location: "Onsite",
  position: "Graduate Engineering Trainee",
  period: "Aug 2025 - Present",
  achievements: [
    "Utilized various caching design patterns in backend APIs, optimizing performance by 40%",
    "Deployed multithreading and asynchronous programming to improve performance and concurrency.",
    "Architected and enhanced data models and queries in Database for efficient storage and retrieval.",
  ],
},{
    company: "Moonwyre Software Private Limited ",
    location: "Remote",
    position: "Backend Developer Intern",
    period: "July 2025 - Aug 2025",
    achievements: [
      `Optimized FastAPI endpoints with caching, reducing response time by 85% and delivering 7x faster performance.`,
      "Applied System Performance Tuning by streamlining serialization to eliminate a 51% bottleneck, boosting overall processing efficiency by 30%.",
      "Built asynchronous REST APIs using concurrency techniques, improving performance by 20%.",
      "Migrated systems, reducing data validation time by 67% and enhancing cross-version compatibility.",
      "Improved backend scalability by 30% by implementing LZ4-compressed data storage and efficient caching.",
      "Reduced test suite runtime to 25% of original by optimizing Pytest workflows.",
    ],
  },
  {
    company: "Ramujan Universe",
    location: "Remote",
    position: "High Performance Computing intern ",
    period: "june 2024 - july 2024",
    achievements: [
      `Implemented OpenMPI based parallel algorithms to boost computational efficiency by 40% in HPC environments.Conducted comprehensive performance analysis and benchmarking of HPC systems using MPIP and Scalasca`,
    ],
  }
 
];

export const education = [
  {
    institution: "Jaypee University of Engineering and Technology",
    location: "Guna, India",

    degree: "Bachelor of Technology Computer Science and Engineering",
    period: "Aug 2021 - May 2025",
    achievements: [
      "GPA: 8.7/10",
      "Active member of the university's coding club, participating in various hackathons and coding competitions.",
      "Completed courses in Data Structures, Algorithms, Operating Systems, and Database Management Systems.",
    ],
   
  },
  {
    institution: "Durga Public School",
    location: "Solan ,Himachal Pradesh, India",
    degree: "Higher Secondary School Certificate",
    period: "Apr 2019 - May 2020",
    achievements: [
      "Percentage: 94.2%",
      "Participated in various inter-school competitions and events.",
    ],
  },
  {
    institution: "Durga Public  School",
    location: "Solan ,Himachal Pradesh, India",
    degree: "Secondary School Certificate",
    period: "Apr 2017 - May 2018",
    achievements: [
      "Percentage: 87.0%",
      "Participated in various inter-school competitions and events.",
      "Played Football at state level ",

    ],
  },
];
export const skills = {
  programmingLanguages: [
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "C"

  ],
  frontendDevelopment: [
    "Nextjs",
    "Reactjs",
    "Shadcn UI",
    "Tailwind CSS",
    "Material UI",
    "Acertinity UI",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Nodejs", "Expressjs","Flask","Gin"],
  databaseAndStorage: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  cloudAndDevOps: ["AWS", "Docker","Prometheus","Grafana"],
  toolsAndServices: [
   "Git",
    "GitHub",
    "Postman",
    
    "Grafana K6",
    "Nginx",
    "Zod",
    
  ],
};

export const projects = [
  {
  title: "Employee-Manager REST API",
  github: "https://github.com/shivam261/employee-manager-api", // Replace with actual if different
  live: "https://documenter.getpostman.com/view/33373776/2sB2xECp2v", // Replace with actual live link
  description: [
    "A scalable, production-ready REST API built with Flask to manage employees and their managers.",
    "Implements clean architecture with Factory, Repository, and Service design patterns for maintainability and modularity.",
    "Supports full CRUD operations, employee-manager assignment, and real-time Redis caching.",
    "Enables rate limiting via Flask-Limiter with Redis backend to protect against abuse.",
    "Utilizes PostgreSQL for persistent storage, SQLAlchemy for ORM, and Alembic for migrations.",
    "Dockerized with multi-stage builds for efficient deployment; auto-runs DB migrations on startup.",
    "Organized using modular Flask Blueprints and RESTful route structures for clarity and scalability.",
  ],
}

  ,
  {
    title: "Email Campaign",
    github: "https://github.com/shivam261/EmailCampaign",
    description: [
      "Developed a robust email campaign application using Node.js and Express.",
      "Implemented features like user authentication, email scheduling, and analytics.",
      "Utilized MongoDB for data storage.",
      "Designed a responsive UI with React and Tailwind CSS for seamless user experience.",
      "Integrated third-party APIs for email delivery and tracking.",
    ],
  },
  {
    title: "School Manager",
    github: "https://github.com/shivam261/schoolManagement",
    description: [
      "Developed a comprehensive school management system using MERN stack.",
      "Implemented features like student enrollment, attendance tracking, and grade management.",
      "Utilized JWT for secure authentication and authorization.",
      "Designed a responsive UI with React and Shadcn for seamless user experience.",
      "Integrated RESTful APIs for efficient data handling and retrieval.",
      "Implemented role-based access control for teachers, students, and administrators.",
    ],
  },
  {
    title: "Video Conferencing App",
    github: "https://github.com/shivam261/video_calling-.git",
    description: [
      "video conferencing app using WebRTC and Socket.io for real-time communication.",
      "Implemented features like screen sharing, chat, and file sharing.",
      "Utilized Node.js and Express for backend, ensuring secure and efficient data handling.",
      "Employed MongoDB for user data management and Redis for session handling.",
      "Designed a responsive UI with React and Tailwind CSS, ensuring cross-device compatibility.",
    ],
  },
];

export const awards = [
  {
    name: "JUET Hackathon 2023",
    issuer: "Jaypee University of Engineering and Technology",
    date: "Sep 2022",
    type: "Hackathon",
    position: "Second Place",
  },
 
 
];
