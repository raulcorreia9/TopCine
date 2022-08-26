import React, { useEffect } from "react";
import Navbar from "../components/navbar/index";
import moviesService from "../services/moviesService";

const Categories = () => {

    useEffect(() => {
        //Requisição fetch ao service
        const loadGenres = async () => {
            const genresMovies = await moviesService.getGenresMovies();
            console.log(genresMovies[2].items);
        }
        
        loadGenres();
    }, [])

    return (
        <>
        <Navbar />
        <div>Categories</div>
        </>
    );
};

export default Categories;
