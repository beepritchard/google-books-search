import React from "react";
import heroImage from "../images/literatureBG.jpg";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100vw",
  height: "calc(100vw * .43333)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Books Search App - Google Book_API</h1>
            <p>Search your favorite book and save to read</p>
        </header>
    );
}

export default Header;