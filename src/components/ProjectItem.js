import React from "react";

function ProjectItem({ name, about, technologies }) {

console.log(technologies, "technologies prop passed down to projectitem")


return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technologies, index)=> {
          return <span key={index}>{technologies}</span>
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
