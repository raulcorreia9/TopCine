import React, { useEffect, useState } from "react";
//Components
import Navbar from "../components/navbar/index";
import MovieRow from "../components/movieRow";
//Services
import moviesService from "../services/moviesService";

const Categories = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        //Requisição fetch ao service
        const loadGenres = async () => {
            const genresMovies = await moviesService.getGenresMovies();
            setMovieList(genresMovies);
        }
        
        loadGenres();
    }, [])

    return (
        <>
        <Navbar />
        <div className="categoriesContainer" style={{ marginTop: 100 }}>
            { movieList.map((item, key) => (
                <MovieRow key={ key } title={ item.title } items={ item.items } />
            )) }
        </div>
        </>
    );
};

export default Categories;
