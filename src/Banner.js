import React, {useState, useEffect} from 'react'
import "./Banner.css"
import requests from "./requests";
import Axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
           const request = await Axios.get(requests.fetchNetflixOriginals);
           setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length - 1)]);
        }
        fetchData()
    }, [])

    function truncate (str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
            
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            {/* div -> 2 buttons*/}
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            {/* description */}
            <div className="banner__description">
                {truncate(movie?.overview, 100)}
            </div>

            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner
