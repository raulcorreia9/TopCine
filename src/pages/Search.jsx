import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
//Components
import MovieCard from "../components/movieCard";
//Services
import moviesService from "../services/moviesService";

import '../common/moviesGrid.scss';

const Search = () => {

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  //Query param "q" vem através do navigate do component NavBar
  const query = searchParams.get("q");

  useEffect(() => {
    //Requisição fetch ao service
    const loadSearchedMovies = async () => {
      let result = await moviesService.getSearchMovies(query);
      setMovies(result);
    }

    loadSearchedMovies();
  }, [query])

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="title">Resultados para: <span className="textQuery">{ query }</span></h2>
        <div className="moviesContainer">
          { movies.length === 0 && <p>Carregando...</p>}
          { movies.length > 0 && movies.map((movie) => 
            <MovieCard movie={ movie } key={ movie.id }/>
          ) }
        </div>
      </div>
    </>
  )
};

export default Search;
