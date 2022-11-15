import React, { useState } from "react";
import logo from "../images/logo.png";
import Input from "./Input";
import Button from "./Button";
import "./Step1.css";

const Step1 = () => {
  const [words24, setWords24] = useState(false);
  return (
    <div className="step1-container">
      <div>
        <img src={logo} alt="Logo" width={100} />
      </div>
      <div className="step1-name">
        <text>Secret Recovery Phrase</text>
      </div>
      <div className="step1-desc">
        <text>
          Import an existing wallet with your 12 or 24-word secret recovery
          phrase.
        </text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Input number="1" />
        <Input number="2" />
        <Input number="3" />
        <Input number="4" />
        <Input number="5" />
        <Input number="6" />
        <Input number="7" />
        <Input number="8" />
        <Input number="9" />
        <Input number="10" />
        <Input number="11" />
        <Input number="12" />

        {words24 && (
          <>
            <Input number="13" />
            <Input number="14" />
            <Input number="15" />
            <Input number="16" />
            <Input number="17" />
            <Input number="18" />
            <Input number="19" />
            <Input number="20" />
            <Input number="21" />
            <Input number="22" />
            <Input number="23" />
            <Input number="24" />
          </>
        )}
      </div>
      <div
        onClick={() => {
          setWords24(!words24);
        }}
        style={{ fontSize: 18, margin: 20, color: "gray" }}
      >
        {words24
          ? "I have a 12-word recovery phrase"
          : "I have a 24-word recovery phrase"}
      </div>
      <Button text="Import Wallet" bgcolor="#323232" />
    </div>
  );
};

export default Step1;
