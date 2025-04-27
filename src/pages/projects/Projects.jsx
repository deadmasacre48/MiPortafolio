import React from "react";
import Header from "../../components/header";
import { ProjectIcons } from "../../components/projects/ProjectIcons";
import ProjectItem from "../../components/projects/ProjectItem";

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
