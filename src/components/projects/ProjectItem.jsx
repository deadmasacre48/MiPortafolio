import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectTag from "./ProjectTag";

const ProjectItem = ({ project }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <ProjectTag tag={tag} />
          ))}
        </div>

        <div className="flex justify-end space-x-4">
          <a
            href={project.githubUrl}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={project.liveUrl}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
