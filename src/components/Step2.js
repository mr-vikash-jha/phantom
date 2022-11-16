import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import logo from "../images/logo.png";
import "./Step2.css";
import Button from "./Button";

const Step2 = () => {
  const [value, setValue] = useState();
  return (
    <div className="step2-container">
      <img src={logo} alt="Logo" width={110} />
      <div className="step2-name-div">
        <text>2-Step Verification</text>
      </div>
      <div className="step2-desc-div">
        <text>
          Enter the 2-step verification generated by your authentaticator app
        </text>
      </div>
      <div className="phone-input">
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      </div>
      <Button text="Import Wallet" bgcolor="#323232" />
    </div>
  );
};

export default Step2;
