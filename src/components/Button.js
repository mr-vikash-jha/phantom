import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button_box">
      <div style={{ backgroundColor: props.bgcolor }} className="button">
        {props.text}
      </div>
    </div>
  );
};

export default Button;
