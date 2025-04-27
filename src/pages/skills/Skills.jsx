import React from "react";
import SkillsItem from "../../components/skills/SkillsItem";
import { SkillsIcons } from "../../components/skills/SkillsIcons";
import Header from "../../components/HeaderBasic";

const SkillsPage = () => {
  return (
    <Header title={"SKILLS"}>
      <h2 className="text-base sm:text-lg md:text-xl text-gray-300 font-medium pl-4 sm:pl-12 md:pl-20">
        Como <span className="text-purpletoy font-bold">Desarrollador</span> en
        varios ambitos, combino diferentes tecnologías para crear experiencias
        digitales únicas y funcionales, utilizando herramientas modernas y
        prácticas innovadoras.
      </h2>

      <div className="mt-8 md:mt-12 pl-4 sm:pl-12 md:pl-20 grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {SkillsIcons.map((skillGroup) => (
          <SkillsItem key={skillGroup.id} skill={skillGroup} />
        ))}
      </div>
    </Header>
  );
};

export default SkillsPage;
