import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="input-container">
      <div className="input-number">{props.number}</div>
      <input type="text" />
    </div>
  );
};

export default Input;
