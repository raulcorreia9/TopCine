//generic
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

//for search
const searchURL = import.meta.env.VITE_SEARCH;
//for genres
const genresURL = import.meta.env.VITE_GENRE;

//Fetch URL's
const topRatedMoviesURL = `${moviesURL}/movie/top_rated?language=pt-BR&api_key=${apiKey}`;
const searchedMoviesURL = `${searchURL}/?language=pt-BR&api_key=${apiKey}`;
const genresMoviesURL = `${genresURL}?language=pt-BR&api_key=${apiKey}`

//Basic fetch for genres
async function basicFetch (genre) {
    const res = await fetch(`${moviesURL}${genre}`);
    const data = await res.json();
        
    return data.results;
}

export default {
    getTopRatedMovies: async () => {
        const res = await fetch(topRatedMoviesURL);
        const data = await res.json();
        
        return data.results;
    },
    getSearchMovies: async (searchTerm) => {
        const res = await fetch(searchedMoviesURL+`&query=${searchTerm}`);
        const data = await res.json();
        
        return data.results;
    },
    getMovieById: async (id) => {
        const res = await fetch(`${moviesURL}/${id}?language=pt-BR&api_key=${apiKey}`);
        const data = await res.json();
            
        return data;
    },
    getGenresMovies: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados da semana',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
            },
        ]
    }
}