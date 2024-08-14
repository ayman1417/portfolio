import React from "react";
import { Data } from "./ProjectsData.jsx";
import SingleProject from "../SingleProject/SingleProject";

function Project() {
  return (
    <div className="flex flex-row justify-around p-6 flex-wrap fade-in">
      {Data.map((project) => (
        <SingleProject
          key={project.id}
          name={project.title}
          Used={project.use}
          Description={project.Descrioption}
          Link={project.link}
        />
      ))}
    </div>
  );
}

export default Project;
