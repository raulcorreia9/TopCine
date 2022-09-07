import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.scss";

const imageURL = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieCard = ({ movie, showLink = true }) => {

  return (
    <>
      <div className="movieCard">
        <img 
        className="movieImg"
          src={imageURL + "/" + movie.poster_path}
          alt={movie.original_title}
        />
        <div className="movieBasicInfoContainer">
          <p className="movieTitle">{movie.title}</p>
          <p className="movieStarIcon">
            <FaStar /> {movie.vote_average}
          </p>
        </div>
        {showLink && (
          <Link to={`/movie/${movie.id}`} className="detailsButton">
            Detalhes
          </Link>
        )}
      </div>
    </>
  );
};

export default MovieCard;
