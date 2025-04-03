import React from "react";
import "../styles/styles.css";

const CCTVPlayer = () => {
  return (
    <div className="cctv-container">
      <h2>Live CCTV Feed</h2>
      <video controls autoPlay>
        <source src="http://localhost:5000/live_feed" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CCTVPlayer;
