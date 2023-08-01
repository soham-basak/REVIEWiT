import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Movies />
      </div>
    </>
  );
};

export default Home;
