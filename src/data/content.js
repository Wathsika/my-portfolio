import farmImg from "../assets/projects/farmImg.png";
import foodImg from "../assets/projects/foodImg.png";
import movieImg from "../assets/projects/movieImg.png";
import reminder_botImg from "../assets/projects/reminder_botImg.png";

export const projects = [
  {
    title: "AI Reminder Bot – DevOps Powered Discord Assistant",
    description:
      "A containerized AI-powered Discord bot that manages reminders and schedules using natural language processing. Built with Python and PostgreSQL, deployed using Docker & Docker Compose, and automated through a CI/CD pipeline with GitHub Actions for production deployment.",
    tech: [
      "Python",
      "Discord API",
      "Docker",
      "Docker Compose",
      "PostgreSQL",
      "SQLAlchemy",
      "GitHub Actions",
      "CI/CD",
    ],
    github: "https://github.com/Wathsika/ai-reminder-bot",
    link: "YOUR_DEPLOYMENT_LINK_IF_AVAILABLE",
    image: reminder_botImg,
  },

  {
    title: "MERN Stack E-Commerce Platform",
    description:
      "A complete e-commerce platform with user authentication, product management, cart functionality, and payment gateway integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/SavinduS/Smart-Farm-System",
    link: "https://smart-farm-system-deployed-frontend.onrender.com",
    image: farmImg,
  },
  {
    title: "Online Food Ordering System",
    description:
      "Java Servlet-based application simulating restaurant operations. Features include menu browsing, order placement, and invoice generation.",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    github: "https://github.com/SavinduS/Online-Food-Ordering",
    link: "https://online-food-ordering-app-lfmu.onrender.com",
    image: foodImg,
  },
  {
    title: "Movie Booking System",
    description:
      "Comprehensive cinema reservation platform with dynamic seat selection, booking history, and admin dashboard for management.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    github: "https://github.com/SavinduS/Online-Movie-Booking",
    link: "https://swanscinema.fwh.is/",
    image: movieImg,
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Java", "Python", "C/C++"],
  },
  {
    title: "Database",
    skills: ["SQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Postman", "AI Tools"],
  },
];

export const certifications = [
  {
    title: "Postman API Fundamentals",
    issuer: "Postman Student Expert",
    color: "border-orange-200 bg-orange-50/30",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    color: "border-blue-200 bg-blue-50/30",
  },
];
