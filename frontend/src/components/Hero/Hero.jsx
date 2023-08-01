import React from "react";
import heroImg from "../../img/hero.jfif";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h2>Lights,</h2> <h2> Camera, Review: </h2>
          <h3>Your Ultimate Destination for Movie Enthusiasts!</h3>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="hero-divider">
        <h1 className="fancy">MOVIES</h1>
      </div>
    </>
  );
};

export default Hero;
