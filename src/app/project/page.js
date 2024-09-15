import React from "react";
import Projects from "../../../components/Projects";
import "./Projects.css";
const Project = () => {
  return (
    <div>
      <div className="project-page">
        <h2>Projects</h2>
        <p>Things I’ve built so far</p>
      </div>
      <Projects />
    </div>
  );
};

export default Project;
