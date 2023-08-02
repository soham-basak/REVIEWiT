import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profilePic from "../../img/profile.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          <h2>REVIEWiT</h2>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
          <li className="nav-img">
            <Link to="/profile">
              <img src={profilePic} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
