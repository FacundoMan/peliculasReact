import { API_URL_IMAGE } from "../utils/Constants";
import { Link } from "react-router-dom";


export function MovieCard({ movie }) {
  //Mejorar estoy y pasarlo con las propms adecuadas, ver video de midu rapid prueba
  const movieImageURL = API_URL_IMAGE + movie.poster_path;
  const movieBackImageUrl=API_URL_IMAGE+movie.backdrop_path;
  return (
      <Link className="boxCard" to={"/details/"+movie.id}>
        <h2 className="tittleCard">{movie.title}</h2>
        <img className="imgCard" src={movieImageURL} alt={"Poster de la pelicula " + movie.title} />
        <p className="overviewMovie">{movie.overview}</p>
        <img className="backDrop" src={movieBackImageUrl}></img>
      </Link>
  );
}
