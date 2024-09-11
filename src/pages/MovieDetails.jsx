import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { API_URL_IMAGE } from "../utils/Constants";

export function MovieDetails() {
  const { movieId } = useParams();
 
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    get("movie/"+movieId).then((data) => setMovie(data));
  }, [movieId]);
  
  const movieImageURL = API_URL_IMAGE + movie.poster_path;
  return <>
        <h1>{movie.title}</h1>
        <img src={movieImageURL} alt={"Poster de la pelicula "+movie.title}/>
        <p>{movie.overview}</p>
          <ul>
           { movie.genres.map((genero)=> <li key={genero.id}>{genero.name}</li>)}
          </ul>
          
        
  </>
}
