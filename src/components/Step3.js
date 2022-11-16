import React from "react";
import "./Step3.css";
import logo from "../images/logo.png";

const Step3 = () => {
  return (
    <div className="step3-container">
      <img src={logo} alt="Logo" width={110} />
      <div className="step3-desc-div">
        <text>Your Entry Submitted Succesfully</text>
      </div>
    </div>
  );
};

export default Step3;
