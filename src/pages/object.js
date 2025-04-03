import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/objectDetection.css";

const ObjectDetection = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [details, setDetails] = useState("");

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  return (
    <div className="object-detection-page">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592; Back
      </button>

      <h1 className="title-box"> Face Trace </h1>

      {/* Main Content Section */}
      <div className="content-section">
        {/* Image Upload Box */}
        <div className="upload-container">
          <h2 className="section-title">Upload Image</h2>
          <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
          <button className="upload-button" disabled={!selectedImage}>
            Upload Image
          </button>
        </div>

        {/* Object Detection Container */}
        <div className="detect-container">
          <h2 className="section-title">Object Detection</h2>
          <input type="file" accept="image/*" className="file-input" />
          <button className="detect-button">Detect Object</button>
        </div>

        {/* Enter Additional Details Container */}
        <div className="details-container">
          <h2 className="section-title">Enter Details</h2>
          <input type="text" placeholder="Enter details..." onChange={handleDetailsChange} className="details-input" />
          <button className="details-button">Submit Details</button>
        </div>
      </div>

      {/* View Results Button (Centered Bottom) */}
      <button className="results-button" onClick={() => navigate("/results")}>
        View Results
      </button>
      <button className="results-button" onClick={() => navigate("/results")}>
  View Results
</button>

    </div>
  );
};

export default ObjectDetection;
