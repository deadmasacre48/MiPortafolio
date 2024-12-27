import React from "react";
import { animated, useSpring } from "react-spring";
import HomePage from "./pages/home/Home";
import SkillsPage from "./pages/skills/Skills";
import ProjectsPage from "./pages/projects/Projects";
import AboutPage from "./pages/about/About";
import FloatingIcons from "./components/decoration/FloatingIcon";
import AbstractShapes from "./components/decoration/Shapes";
import AnimatedLines from "./components/decoration/AnimatedLines";
import Navbar from "./components/menu/navbar";

const App = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div
      style={fade}
      className="relative min-h-screen w-full bg-gradient-to-tr from-purplesss via-purpless to-purples overflow-x-hidden"
    >
      <div className="fixed inset-0 z-0">
        <FloatingIcons />
        <AbstractShapes />
        <div className="absolute top-0 left-0">
          <AnimatedLines />
        </div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <section id="home" className="min-h-screen">
          <HomePage />
        </section>
        <section id="skills" className="min-h-screen">
          <SkillsPage />
        </section>
        <section id="projects" className="min-h-screen">
          <ProjectsPage />
        </section>
        <section id="contact" className="min-h-screen">
          <AboutPage />
        </section>
      </div>
    </animated.div>
  );
};

export default App;
