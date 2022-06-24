import { Container } from "@mui/system";
import React from "react";
import headerContent from '../static/assets.json';
import '../styles/Header.css';
import personCoding from '../videos/person-coding.mp4'

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
    <>
     <Container className="header-container">
        <video loop autoPlay muted={true} className="header-video">
            <source src={personCoding} type="video/mp4"/>
        </video>
        {header}
     </Container>
    </>
  )};

export default Header;
