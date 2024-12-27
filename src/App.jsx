import React from "react";
import { useSpring, animated } from "@react-spring/web";
import AnimatedLines from "./components/decoration/AnimatedLines";
import AbstractShapes from "./components/decoration/Shapes";
import FloatingIcons from "./components/decoration/FloatingIcon";
import Navbar from "./components/menu/navbar";
import HomePage from "./pages/home/Home";

const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <animated.div
      style={fade}
      className="relative min-h-screen w-screen h-screen bg-gradient-to-tr from-purplesss via-purpless to-purples  overflow-hidden"
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
        <HomePage />
      </div>
    </animated.div>
  );
};

export default App;
