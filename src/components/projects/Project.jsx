import React from "react";
import '../../styles/Projects.css'
import Card from './Card';
import projectContent from '../../static/assets.json'

const Project = () => {
  const projectData = projectContent.map((asset, keys) => {
    const cardData = asset.MAIN.PROJECTS.projects;
    return (
      <div key={keys}>
        <h2 className="project-title"><em>{asset.MAIN.PROJECTS.title}</em></h2>
        <div className="project-title-border"></div>
        {
          cardData.map((card, keyIndex) => {
            return (
              <div key={keyIndex}>
                <Card 
                  cardTitle={card.projectTitle}
                  cardContent={card.projectDescription}
                  projectLink={card.projectLink}
                  githubLink={card.githubLink}
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
