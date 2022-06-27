import React from "react";
import '../../styles/Projects.css'
import Card from './Card';
import projectContent from '../../static/assets.json'

const Project = () => {
  const projectData = projectContent.map((asset, keys) => {
    const cardData = asset.MAIN.PROJECTS.projects;
    return (
      <div key={keys}>
        <h2 className="project-title">{asset.MAIN.PROJECTS.title}</h2>
        <div className="project-title-border"></div>
        {
          cardData.map(card => {
            return (
              <div key={keys}>
              <Card 
                cardTitle={card.projectTitle}
                cardContent={card.projectDescription}
                link={card.projectLink}
              />
              </div>
            );
          })
        }
      </div>
    );
  });
  return (
    <div>
      {projectData}
    </div>
  )};

export default Project;
