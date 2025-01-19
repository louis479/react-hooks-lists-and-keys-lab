import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      {projects.map(({ id, name, description, technologies }) => (
        <ProjectItem
          key={id}
          name={name}
          description={description || "No description available"}
          technologies={technologies}
        />
      ))}
    </div>
  );
}

// Prop validation
ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string, // Made optional to avoid runtime warnings
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ProjectList;
