//generic
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

//for search
const searchUrl = import.meta.env.VITE_SEARCH;

//Fetch URL's
const topRatedMoviesUrl = `${moviesURL}/top_rated?language=pt-BR&api_key=${apiKey}`;
const searchedMovies = `${searchUrl}/?language=pt-BR&api_key=${apiKey}`;

export default {
    getTopRatedMovies: async () => {
        const res = await fetch(topRatedMoviesUrl);
        const data = await res.json();
        
        return data.results;
    },
    getSearchMovies: async (searchTerm) => {
        const res = await fetch(searchedMovies+`&query=${searchTerm}`);
        const data = await res.json();
        
        return data.results;
    },
    getMovieById: async (id) => {
        const res = await fetch(`${moviesURL}/${id}?language=pt-BR&api_key=${apiKey}`);
        const data = await res.json();
            
        return data;
    }
}