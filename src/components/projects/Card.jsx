import React from "react";
import MyButton from '../MyButton';

const Card = ({ cardTitle, cardContent}) => {
  return (
    <div className="card-container">
        <section className="card-title">
            <h3>{cardTitle}</h3>
        </section>
        <section className="card-content">
            {cardContent}
        </section>
        {/* make custom button */}
        <MyButton>
            View Project
        </MyButton>
    </div>
  )};

export default Card;
