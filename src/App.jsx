import { ArrowUp } from "lucide-react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Hero from "./sections/Hero";
import { useEffect, useState } from "react";
import About from "./sections/About";
import Marquee from "./components/Marquee";
import LinePattern from "./components/LinePattern";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import PixelDistortionDivider from "./components/PixelDistortionDivider";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="xl:max-w-322.5 mx-auto px-4">
        <div className="border-l border-r border-gray-800">
          <Header />
          <main role="main">
            <Hero />
            <LinePattern direction="right" />
            <About />
            <Marquee
              text="Check out my CV"
              link="https://cv.djinni.co/3f/5dcc32e8226c7cf498178cda4fcc25/CV_Levin_Ihor_Front-end.pdf"
            />
            <Experience />
            <PixelDistortionDivider />
            <Skills />
            <LinePattern direction="left" />
            <Projects />
            <Marquee
              text="Check out more projects on Github."
              style="dark"
              link="https://github.com/leviiiin"
            />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 border border-transparent hover:border-gray-800 p-2 cursor-pointer transition-all duration-300 bg-white/80 backdrop-blur-sm z-50
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-gray-800" />
      </button>
    </>
  );
};

export default App;
