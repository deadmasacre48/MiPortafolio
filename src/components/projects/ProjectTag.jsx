import React from "react";

const ProjectTag = ({ tag }) => {
  return (
    <span className="px-2 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full">
      {tag}
    </span>
  );
};

export default ProjectTag;
