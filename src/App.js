import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoUpload from "./pages/VideoUpload";
import ObjectDetection from "./pages/object";
import ResultsPage from "./pages/ResultsPage"; // Import new Results page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-upload" element={<VideoUpload />} />
        <Route path="/object-detection" element={<ObjectDetection />} />
        <Route path="/results" element={<ResultsPage />} /> {/* Connect Results page */}
      </Routes>
    </Router>
  );
}

export default App;
