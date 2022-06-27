import React from "react";
import '../styles/Footer.css';
import linkedInLogo from '../icons/linkedin.svg';
import githubLogo from '../icons/github.svg';
import footerContent from '../static/assets.json'

const Footer = () => {
  const footer = footerContent.map((asset, keys) => {
    return (
      <div key={keys} className="footer-container">
        <div>
          <p className="footer-text">{asset.FOOTER.title}</p>
        </div>
        <div>
          <a href={asset.FOOTER.linkedInLink} target="_blank" rel="noreferrer">
            <img className="footer-icon" src={linkedInLogo} alt="linkedIn icon"/>
          </a>
          <a href={asset.FOOTER.github} target="_blank" rel="noreferrer">
            <img className="footer-icon" src={githubLogo} alt="github icon"/>
          </a>
        </div>
      </div>
    )
  });
  return (
    <>
      {footer}
    </>
  )};

export default Footer;
