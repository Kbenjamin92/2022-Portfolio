import React from "react";
import '../../styles/Card.css';
import MyButton from '../MyButton';


const Card = ({ cardTitle, cardContent, projectLink, githubLink}) => {

  return (
    <div className="outer-card-container">
       <div className="inner-card-container">
          <section className="card-title-section">
              <h3 className="card-title">{cardTitle}</h3>
          </section>
          <section className="card-content">
              <p className="card-text">{cardContent}</p>
          </section>
          <div className="card-btn-container">
            <section>
              <a href={projectLink} target="_blank" rel="noreferrer"><MyButton>View Project</MyButton></a>
            </section>
            <section>
              <a href={githubLink} target="_blank" rel="noreferrer"><MyButton>View Repo</MyButton></a>
            </section>
          </div>
      </div>
    </div>
  )};

export default Card;
