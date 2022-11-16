import React from "react";
import "./Card.css";
import logo from "../images/logo.png";

const Card = (props) => {
  return (
    <div className="card-main">
      {/* <div className="info-container">
        <div className="card-center">
          <img src={logo} alt="Logo" width={120} />
        </div>
        <div>
          <text className="name">Phrom</text>
        </div>
        <div>
          <text className="desc">
            A crypto wallet reimagined for DeFi & NFTs
          </text>
        </div>
      </div> */}
      {/* <div className="button-container"></div> */}
      {props.children}
    </div>
  );
};

export default Card;
