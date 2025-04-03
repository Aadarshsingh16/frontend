import React from "react";
import "../styles/styles.css";

const AlertBox = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default AlertBox;
