import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = { color: "#542cca" };
  const inactiveStyle = { color: "#333333" };
  return (
    <div>
      <div className="header-container">
        <ArrowBackIcon
          fontSize="small"
          style={{
            color: "gray",
            width: "10%",
          }}
        />
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <NavLink
            exact
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            to="/"
          >
            <FiberManualRecordIcon fontSize="small" />
          </NavLink>
          <NavLink
            exact
            to="step2"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            <FiberManualRecordIcon fontSize="small" />
          </NavLink>
          <NavLink
            exact
            to="step3"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            <FiberManualRecordIcon fontSize="small" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
