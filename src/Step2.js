import React, { useState } from "react";
import Card from "./components/Card";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import logo from "./images/logo.png";

const Step2 = () => {
  const [value, setValue] = useState();

  return (
    <Card>
      <div className="info-container">
        <img src={logo} alt="Logo" width={121} />
        <div>
          <text>2-Step Verification</text>
        </div>
        <div>
          <text>
            Enter the 2-step verification generated by your authentaticator app
          </text>
        </div>
        <div>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </Card>
  );
};

export default Step2;