import { useEffect, useState } from "react"
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import { API_DISCOVER } from "../utils/Constants";

export function ContextMovieCard(){
    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        get(API_DISCOVER).then((data)=> setMovies(data.results))
        
    },[])
    console.log(movies)
    return (<ul>
        {
         
            movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))
        }
    </ul>)
}