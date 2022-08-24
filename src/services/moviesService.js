const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

//Fetch URL's
const topRatedMoviesUrl = `${moviesURL}/top_rated?language=pt-BR&api_key=${apiKey}`;

export default {
    getTopRatedMovies: async () => {
        const res = await fetch(topRatedMoviesUrl);
        const data = await res.json();
        
        return data.results;
    },
}