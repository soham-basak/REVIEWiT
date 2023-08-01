import React from "react";
import "./Navbar.css";
import profilePic from "../../img/profile.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h2>REVIEWiT</h2>
        <ul className="nav-menu">
          <li className="nav-item">HOME</li>
          <li className="nav-item">ABOUT</li>
          <li className="nav-item">LOGIN</li>
          <li className="nav-item">REGISTER</li>
          <li className="nav-img">
            <img src={profilePic} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
