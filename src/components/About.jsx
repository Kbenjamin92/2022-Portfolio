import React from "react";
import '../styles/About.css';
import aboutContent from '../static/assets.json';
import person from '../icons/person-icon.svg';
import smile from '../icons/smile-icon.svg';
import check from '../icons/check-icon.svg';


const About = () => {

  const about = aboutContent.map((asset, keys) => {
    return (
      <div key={keys}>
        <h2 className="about-main-title"><em>{asset.MAIN.ABOUT.title}</em></h2>
        <div className="about-title-border"></div>
        <div className="about-container">
          <div>
            <h3 className="about-title"><span className="icons"><img src={person} alt="person icon"/></span>{asset.MAIN.ABOUT.experience.title}</h3>
            <p className="about-description">{asset.MAIN.ABOUT.experience.description}</p>
          </div>
          <div className="experience-border"></div>
          <div>
            <h3 className="about-title"><span className="icons" ><img src={smile} alt="smile icon"/></span>{asset.MAIN.ABOUT.personality.title}</h3>
            <p className="about-description">{asset.MAIN.ABOUT.personality.description}</p>
          </div>
          <div className="personality-border"></div>
          <div>
            <h3 className="about-title"><span  className="icons"><img src={check} alt="check icon"/></span>{asset.MAIN.ABOUT.goals.title}</h3>
            <p className="about-description">{asset.MAIN.ABOUT.goals.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      {about}
    </div>
  )};

export default About;
