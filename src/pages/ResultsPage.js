import React from "react";
import "../styles/resultsPage.css";

const Results = () => {
  return (
    <div className="results-page">
      
      {/* Title Box */}
      <div className="title-box"> Face Trace </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        ⬅ Back
      </button>

      {/* Video Container */}
      <div className="video-container">
        <h2>Matched Video Playback</h2>
        <video className="video-player" controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Time Span Box (Added Below Video Playback) */}
      <div className="timespan-container">
        <h3>Detected Time Span</h3>
        <p>From: <strong>12:30 PM</strong> - To: <strong>12:45 PM</strong></p>
      </div>

      {/* Alert Box */}
      <div className="alert-container">
        <h3>Alerts & Notifications</h3>
        <p>No new alerts at this moment.</p>
      </div>
    </div>
  );
};

export default Results;
