import React from "react";
import {
  FaRegSquare,
  FaRegDotCircle,
  FaTimes,
  FaGamepad,
} from "react-icons/fa";
import { animate, motion } from "framer-motion";
import AnimatedLines from "./components/AnimatedLines";
import AbstractShapes from "./components/Shapes";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-purplesss via-purpless to-purples  overflow-hidden">
      <AnimatedLines />
      <AbstractShapes />
    </div>
  );
}

export default App;
