import React from "react";
import '../../styles/Projects.css'
import Card from './Card';
import projectContent from '../../static/assets.json'

const Project = () => {
  const projectData = projectContent.map((asset, keys) => {
    return (
      <div key={keys}>
        <h2 className="project-title">{asset.MAIN.PROJECTS.title}</h2>
        <div className="project-title-border"></div>
      </div>
    );
  });

  return (
    <div>
      {projectData}
      <Card cardTitle="Truth App" cardContent="Built with React"/>
    </div>
  )};

export default Project;
