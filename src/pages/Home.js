import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Title Section */}
      <div className="title-box">
        <h1 className="title">Face Trace</h1>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="button-container">
          <button className="start-button" onClick={() => navigate("/video-upload")}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
