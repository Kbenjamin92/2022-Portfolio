import React from "react";
import headerContent from '../static/assets.json';
import '../styles/Header.css';
import teamCoding from '../videos/team-coding.mp4'

const Header = () => {
  const header = headerContent.map((asset, keys) => {
    return (
        <div key={keys}>
            <div className="header-opacity"></div>
            <h1 className="header-content">{asset.HEADER.title}</h1>
        </div>
      );
  });
  return (
     <div className="header-container">
        <video loop autoPlay muted={true} className="header-video">
            <source src={teamCoding} type="video/mp4"/>
        </video>
        {header}
     </div>
  )};

export default Header;
