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
            <h3 className="about-title"><span className="icons" ><img src={smile} alt="smile icon"/></span>{asset.MAIN.ABOUT.personality.title}</h3>
            <ul>
              <li className="about-description">{asset.MAIN.ABOUT.personality.descriptionOne}</li>
              <li className="about-description">{asset.MAIN.ABOUT.personality.descriptionTwo}</li>
              <li className="about-description">{asset.MAIN.ABOUT.personality.descriptionThree}</li>
              <li className="about-description">{asset.MAIN.ABOUT.personality.descriptionFour}</li>
              <li className="about-description">{asset.MAIN.ABOUT.personality.descriptionFive}</li>
            </ul>
          </div>
          <div className="personality-border"></div>
          <div>
            <h3 className="about-title"><span className="icons"><img src={person} alt="person icon"/></span>{asset.MAIN.ABOUT.experience.title}</h3>
            <ul>
              <li className="about-description">{asset.MAIN.ABOUT.experience.descriptionOne}</li>
              <li className="about-description">{asset.MAIN.ABOUT.experience.descriptionTwo}</li>
              <li className="about-description">{asset.MAIN.ABOUT.experience.descriptionThree}</li>
              <li className="about-description">{asset.MAIN.ABOUT.experience.descriptionFour}</li>
              <li className="about-description">{asset.MAIN.ABOUT.experience.descriptionFive}</li>
              <li className="about-description">{asset.MAIN.ABOUT.experience.descriptionSix}</li>
            </ul>
          </div>
          <div className="experience-border"></div>
          <div>
            <h3 className="about-title"><span  className="icons"><img src={check} alt="check icon"/></span>{asset.MAIN.ABOUT.goals.title}</h3>
            <ul>
              <li className="about-description">{asset.MAIN.ABOUT.goals.descriptionOne}</li>
              <li className="about-description">{asset.MAIN.ABOUT.goals.descriptionTwo}</li>
              <li className="about-description">{asset.MAIN.ABOUT.goals.descriptionThree}</li>
              <li className="about-description">{asset.MAIN.ABOUT.goals.descriptionFour}</li>
              <li className="about-description">{asset.MAIN.ABOUT.goals.descriptionFive}</li>
            </ul>
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
