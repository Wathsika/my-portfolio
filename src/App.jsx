import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // Import newly created component
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications"; // Import newly created component
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Import newly created component

function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <About /> {/* Career goals and education */}
        <Skills />
        <Projects />
        <Certifications /> {/* Python & Postman */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
