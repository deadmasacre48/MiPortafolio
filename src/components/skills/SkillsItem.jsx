import React from "react";

const SkillsItem = ({ skill }) => {
  return (
    <div
      className="
    bg-white/5 hover:bg-white/15 
    backdrop-blur-sm 
    rounded-2xl p-2 
    transition-colors 
    duration-200 shadow-md
    flex items-center"
    >
      <h3 className="text-purpletoy font-bold text-4xl p-2">{skill.icon}</h3>
      <h3 className="text-white font-bold text-xl">{skill.category}</h3>
    </div>
  );
};

export default SkillsItem;
