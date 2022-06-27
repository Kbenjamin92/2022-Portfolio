import React from "react";
import '../../styles/Card.css';
import MyButton from '../MyButton';


const Card = ({ cardTitle, cardContent, link}) => {

  return (
    <div className="card-container">
        <section className="card-title-section">
            <h3 className="card-title">{cardTitle}</h3>
        </section>
        <section className="card-content">
            <p className="card-text">{cardContent}</p>
        </section>
        <a href={link} target="_blank" rel="noreferrer"><MyButton>View Project</MyButton></a>
    </div>
  )};

export default Card;
