import React from "react";
import '../styles/Skills.css';
import skillsContent from '../static/assets.json';
import htmlLogo from '../icons/html-logo.svg';
import cssLogo from '../icons/css-logo.svg';
import jsLogo from '../icons/js-logo.svg';
import reactLogo from '../icons/react-logo.svg';
import gitLogo from '../icons/git.svg';
import npmLogo from '../icons/npm.svg';
import typescriptLogo from '../icons/typescript-logo.svg';
import nodeLogo from '../icons/node-logo.svg';
import bootstrapLogo from '../icons/bootstrap-logo.svg';
import materialUILogo from '../icons/material-ui-logo.svg'
import reduxLogo from '../icons/redux-logo.svg'
import angularLogo from '../icons/angular-logo.svg';
import nextjsLogo from '../icons/nextjs-logo.svg';

const Skills = () => {

  const skills = skillsContent.map((asset, keys) => {
    return (
      <div key={keys}>
        <h2 className="skills-main-title"><em>{asset.MAIN.SKILLS.title}</em></h2>
        <div className="skills-title-border"></div>
        <div className="skills-list">
          <div>
            <img className="skills-icons" src={htmlLogo} alt="html logo"/>
          </div>
          <div>
            <img className="skills-icons" src={cssLogo} alt="css logo"/>
          </div>
          <div>
            <img className="skills-icons" src={jsLogo} alt="js logo"/>
          </div>
          <div>
            <img className="skills-icons" src={typescriptLogo} alt="typescript logo"/>
          </div>
          <div>
            <img className="skills-icons" src={reactLogo} alt="react logo"/>
          </div>
          <div>
            <img className="skills-icons" src={angularLogo} alt="angular logo"/>
          </div>
          <div>
            <img className="skills-icons" src={reduxLogo} alt="redux logo"/>
          </div>
          <div>
            <img className="skills-icons" src={nextjsLogo} alt="next logo"/>
          </div>
          <div>
            <img className="skills-icons" src={nodeLogo} alt="node logo"/>
          </div>
          <div>
            <img className="skills-icons" src={gitLogo} alt="git logo"/>
          </div>
          <div>
            <img className="skills-icons" src={npmLogo} alt="npm logo"/>
          </div>
          <div>
            <img className="skills-icons" src={bootstrapLogo} alt="bootstrap logo"/>
          </div>
          <div>
            <img className="skills-icons" src={materialUILogo} alt="material UI logo"/>
          </div>
          
        </div>
      </div>
    )
  });

  return (
    <div className="skills-container">{skills}</div>
  )};

export default Skills;
