import React, { useState } from "react";
import axios from "axios";
//import "../styles/styles.css";

const UploadForm = ({ setResults }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first.");
    setLoading(true);
    
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData);
      setResults(response.data); // Pass results to parent
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload & Search"}
      </button>
    </div>
  );
};

export default UploadForm;
