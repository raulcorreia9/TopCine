import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
//Components
import Navbar from "../components/navbar";
import MovieCard from "../components/movieCard";
//Services
import moviesService from "../services/moviesService";

import "../common/movie.scss";

const Movie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    //Requisição fetch ao service
    const loadMovie = async () => {
      let result = await moviesService.getMovieById(id);
      setMovie(result);
    }

    loadMovie();
  }, [])

  const formatDollar = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  return (
    <>
      <Navbar />
      <div className="moviePage">
        { movie && (
          <>
            <div className="movieCardContainer">
              <MovieCard movie={ movie } showLink={false} className="movieCard" />
            </div>
            <p className="movieTagLine">{ movie.tagline }</p>
            <div className="info">
              <h3>
                <BsWallet2 className="movieIcon"/> Orçamento
              </h3>
              <p>US$ { formatDollar(movie.budget) }</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp className="movieIcon" /> Faturamento
              </h3>
              <p>US$ { formatDollar(movie.revenue) }</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit className="movieIcon" /> Duração
              </h3>
              <p>{ movie.runtime } minutos</p>
            </div>
            <div className="info">
              <h3>
                <BsFillFileEarmarkTextFill className="movieIcon" /> Descrição
              </h3>
              <p className="description">{ movie.overview }</p>
            </div>
          </>
        )}
      </div>
    </>
  )
};
  
export default Movie;