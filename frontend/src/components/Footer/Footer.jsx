import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <h3 className="heading">REVIEWiT</h3>
        <p>
          Lights, Camera, Review - Your ultimate cinematic destination, where
          honest critiques and passionate discussions unite, empowering you to
          explore, rate, and discover the latest releases, transforming
          movie-watching into an immersive and enlightening experience, while
          connecting you with a vibrant community of fellow film enthusiasts.
        </p>
        <ul className="socials">
          <li>
            <a>
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            copyright &copy;2023{" "}
            <a href="https://github.com/soham-basak">Dexter</a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
