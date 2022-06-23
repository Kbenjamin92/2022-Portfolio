import { Container } from "@mui/system";
import React from "react";
import staticContent from '../static/assets.json';
import '../styles/Header.css';

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
        {headerContent}
     </Container>
    </>
  )};

export default Header;
