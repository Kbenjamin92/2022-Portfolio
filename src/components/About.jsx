import React from "react";
import '../styles/About.css';
import aboutContent from '../static/assets.json';

const About = () => {

  const about = aboutContent.map((asset, keys) => {
    return (
      <div key={keys}>
        <h2 className="about-title">{asset.MAIN.ABOUT.title}</h2>
        <div className="about-container">
          <div>
            <h3>{asset.MAIN.ABOUT.experience.title}</h3>
            <p className="about-description">{asset.MAIN.ABOUT.experience.description}</p>
          </div>
          <div>
            <h3>{asset.MAIN.ABOUT.personality.title}</h3>
            <p className="about-description">{asset.MAIN.ABOUT.personality.description}</p>
          </div>
          <div>
            <h3>{asset.MAIN.ABOUT.goals.title}</h3>
            <p className="about-description">{asset.MAIN.ABOUT.goals.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
    {about}
    </div>
  )};

export default About;
