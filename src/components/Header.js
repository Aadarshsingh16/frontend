import React from "react";
import "../styles/styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Lost Person Tracking System</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/results">Results</a>
        <a href="/upload">Upload Image</a>
      </nav>
    </header>
  );
};

export default Header;
