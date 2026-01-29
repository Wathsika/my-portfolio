import farmImg from "../assets/projects/farmImg.png";
import foodImg from "../assets/projects/foodImg.png";
import movieImg from "../assets/projects/movieImg.png";

export const projects = [
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
