import React from "react";
import PropTypes from "prop-types";

function ProjectItem({ name, description, technologies }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description || "No description provided"}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

// Add PropTypes validation
ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string, // Made optional
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectItem;
