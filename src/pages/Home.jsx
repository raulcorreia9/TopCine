import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import Navbar from "../components/navbar";
import moviesService from "../services/moviesService";

import "../common/moviesGrid.scss";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    //Requisição fetch ao service
    const loadTopRatedMovies = async () => {
      let result = await moviesService.getTopRatedMovies();
      setTopMovies(result);
    }

    loadTopRatedMovies();
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="title">Top 20 filmes:</h2>
        <div className="moviesContainer">
          { topMovies.length === 0 && <p>Carregando...</p>}
          { topMovies.length > 0 && topMovies.map((movie) => 
            <MovieCard movie={ movie } key={ movie.id }/>
          ) }
        </div>
      </div>
    </>
  )
};

export default Home;