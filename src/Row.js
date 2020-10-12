import React, {useState, useEffect} from 'react'
import "./Row.css"
import axios from "./axios"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
             }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "600",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        } else {
        movieTrailer(movie?.name || "").then(url => {
            const urlParams = new URLSearchParams( new URL(url).search)
            setTrailerUrl(urlParams.get("v"));
        }).catch(err => console.log(err))
        setTrailerUrl("XtMThy8QKqU")
        }
    }

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            {/* container */}
            <div className="row__posters">
                {movies.map(movie => <img onClick={e => handleClick(movie)} key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${!isLargeRow ? movie.backdrop_path : movie.poster_path}`} alt={movie.name}/>)}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
