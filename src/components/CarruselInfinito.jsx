import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { API_POPULARITY } from "../utils/Constants";
import { API_URL_IMAGE } from "../utils/Constants";
import { API_DISCOVER } from "../utils/Constants";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight  } from "react-icons/fa";
import { Link } from "react-router-dom";

export function CarruselInfinito() {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    "https://image.tmdb.org/t/p/w500/oGythE98MYleE6mZlGs5oBGkux1.jpg"
  );
  const [imgPrev, setImgPrev]=useState("");
  const [imgNext, setImgNext]=useState("");
  const[idMovie,setIdMovie]=useState("")
  const [tittleMovie, setTittleMovie] = useState(" ");

  //cambia el poster
  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(index, true);
    }, 3000);
    return () => clearInterval(interval);
  });

  //llamadoa la api para cargar las peliculas
/*  useEffect(() => {
    get(API_POPULARITY).then((data) => setMovies(data.results));
    console.log("cargo");
  }, []);*/

  useEffect(()=>{
    get(API_DISCOVER).then((data)=> setMovies(data.results))
    
},[])

  const selectNewImage = (selecteIndex, next) => {
   

    
    const condition = next
      ? index < movies.length - 1
      : index > 0;
    const nextIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
      ? index - 1
      : movies.length - 1;

    //setea la imagen anterior
    movies[nextIndex -1]!=undefined?setImgPrev(API_URL_IMAGE + movies[nextIndex-1].poster_path):setImgPrev(API_URL_IMAGE + movies[movies.length-1].poster_path);
    //setea la nueva imagen
    setSelectedImage(API_URL_IMAGE + movies[nextIndex].poster_path);
    //seta la siguiente
    movies[nextIndex +1]!=undefined?setImgNext(API_URL_IMAGE + movies[nextIndex+1].poster_path):setImgNext(API_URL_IMAGE + movies[0].poster_path);
    
    setTittleMovie(movies[nextIndex].title);
    setIdMovie(movies[nextIndex].id);
    setIndex(nextIndex);
  };

  const nextMovie = () => {
    selectNewImage(index, true);
  };

  const previousMovie = () => {
    selectNewImage(index, false);
  };

  return (
   
      <section className="carouselInf">
        <button onClick={previousMovie}><FaArrowAltCircleLeft></FaArrowAltCircleLeft></button>
        <img className="imgPrev" src={imgPrev} alt={"Pelicula: " + tittleMovie} />
        <Link to={"/details/"+idMovie}> 
         <img className="imgActual" src={selectedImage} alt={"Pelicula: " + tittleMovie} />
        </Link>
        <img className="imgNext" src={imgNext} alt={"Pelicula: " + tittleMovie} />
        <button onClick={nextMovie}><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
      </section>
    
  );
}
