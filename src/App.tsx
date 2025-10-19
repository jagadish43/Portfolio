import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

function App() {
  const [, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-x-hidden">
      <Navbar scrollToSection={scrollToSection} />

      <section id="home">
        <Home scrollToSection={scrollToSection} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </div>
  );
}

export default App;
