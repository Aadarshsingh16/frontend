import React from "react";
import "../styles/styles.css";

const Results = ({ results }) => {
  if (!results) return <p>No results to display.</p>;

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      {results.map((match, index) => (
        <div key={index} className="result-item">
          <img src={match.image} alt="Matched Person" />
          <p>Confidence: {match.confidence}%</p>
          <p>Last Seen: {match.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
