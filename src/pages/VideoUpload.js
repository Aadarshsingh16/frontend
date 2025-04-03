import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/videoUpload.css";

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Uploading: ${selectedFile.name}`);
    }
  };

  return (
    <div className="upload-page">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592; Back
      </button>

      <h1 className="title-box"> Face Trace </h1>

      {/* Upload Section */}
      <div className="content-section">
        {/* Video Upload Box */}
        <div className="upload-container">
          <h2 className="section-title">Upload CCTV Video</h2>
          <input type="file" accept="video/*" onChange={handleFileChange} className="file-input" />
          <button className="upload-button" onClick={handleUpload} disabled={!selectedFile}>
            Upload Video
          </button>
        </div>

        {/* CCTV Integration Box */}
        <div className="cctv-container">
          <h2 className="section-title">CCTV Integration</h2>
          <input type="file" accept="video/*" onChange={handleFileChange} className="file-input" />
          <button className="upload-button" onClick={handleUpload} disabled={!selectedFile}>
            Upload Video
          </button>
        </div>
      </div>

      {/* Found Missing Button */}
      <button className="found-missing-button" onClick={() => navigate("/object-detection")}>
        Found Missing
      </button>
    </div>
  );
};

export default VideoUpload;
