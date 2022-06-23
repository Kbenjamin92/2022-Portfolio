import React from "react";
import staticContent from '../static/assets.json'

const Header = () => {

  const headerContent = staticContent.map((asset, keys) => {
    return (
        <div key={keys}>
            <h1>{asset.HEADER.title}</h1>
        </div>
      );
  });

  return (
    <>{headerContent}</>
  )};

export default Header;
