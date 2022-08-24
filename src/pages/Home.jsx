import { useState, useEffect } from "react";
import moviesService from "../services/moviesService";

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
        <div className="container">
          <h2 className="title">Melhores filmes:</h2>
          <movies className="container">
            { topMovies.length === 0 && <p>Carregando...</p>}
            { topMovies.length > 0 && topMovies.map((movie) => 
              <p>{ movie.title }</p>
            ) }
          </movies>
        </div>
    </>
  )
};

export default Home;