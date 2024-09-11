import "./Carousel.css";
import { useState,useEffect } from "react";
import { FaArrowAltCircleLeft ,FaArrowAltCircleRight } from "react-icons/fa";
import { get } from "../data/httpClient";
import { API_POPULARITY } from "../utils/Constants";
import { API_URL_IMAGE } from "../utils/Constants";
import { Link } from "react-router-dom";

export const CarouselPopularity = () => {
  const [slide, setSlide] = useState(0);
  const [data,setData]=useState([]);
  useEffect(()=>{
    get(API_POPULARITY).then((data)=> setData(data.results))
    
},[])


  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <FaArrowAltCircleLeft onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        const imagenSrc=API_URL_IMAGE + item.poster_path;
        return (<Link key={idx} to={"/details/"+item.id}> 
            <img
            src={imagenSrc}
            alt={item.title}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        </Link>
         
        );
      })}
      <FaArrowAltCircleRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};