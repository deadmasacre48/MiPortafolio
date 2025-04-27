import React from "react";
import { ProjectIcons } from "../../components/projects/ProjectIcons";
import ProjectItem from "../../components/projects/ProjectItem";
import Header from "../../components/HeaderBasic";

const ProjectsPage = () => {
  return (
    <Header title={"PROJECTS"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {ProjectIcons.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Header>
  );
};

export default ProjectsPage;
