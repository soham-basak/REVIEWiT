import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch all movies from your backend API
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/movies"); // Replace with your API endpoint URL
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    // Call the fetchMovies function to retrieve the movies
    fetchMovies();
  }, []);
  return (
    <>
      <div className="home">
        <Hero />
        <Movies movies={movies} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
