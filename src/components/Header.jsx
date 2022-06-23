import { Container } from "@mui/system";
import React from "react";
import staticContent from '../static/assets.json';
import '../styles/Header.css';
import personCoding from '../videos/person-coding.mp4'

const Header = () => {
  const headerContent = staticContent.map((asset, keys) => {
    return (
        <div key={keys}>
            <h1 className="header-content">{asset.HEADER.title}</h1>
        </div>
      );
  });
  return (
    <>
     <Container className="header-container">
        <video loop autoPlay className="header-video">
            <source src={personCoding} type="video/mp4"/>
        </video>
        {headerContent}
     </Container>
    </>
  )};

export default Header;
