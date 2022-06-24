import React from "react";
import aboutContent from '../static/assets.json';

const About = () => {

  const about = aboutContent.map((asset, keys) => {
    return (
      <div key={keys}>
        <h2 className="about-title">{asset.MAIN.ABOUT.title}</h2>
        <div className="about-container">
          <section>
            <h3>{asset.MAIN.ABOUT.experience.title}</h3>
            <p>{asset.MAIN.ABOUT.experience.description}</p>
          </section>
          <section>
            <h3>{asset.MAIN.ABOUT.personality.title}</h3>
            <p>{asset.MAIN.ABOUT.personality.description}</p>
          </section>
          <section>
            <h3>{asset.MAIN.ABOUT.goals.title}</h3>
            <p>{asset.MAIN.ABOUT.goals.description}</p>
          </section>
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
