import React from "react";
import '../styles/Footer.css';
import linkedInLogo from '../icons/linkedin.svg';
import githubLogo from '../icons/github.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p className="footer-text">Kipp Benjamin Jr Portfolio</p>
      </div>
      <div>
        <img className="footer-icon" src={linkedInLogo} alt="linkedIn icon"/>
        <img className="footer-icon" src={githubLogo} alt="github icon"/>
      </div>
    </div>
  )};

export default Footer;
