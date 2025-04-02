import React from 'react'
import { API_OPTIONS, POSTER_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { setMovieTitle, setTrailerVideo } from '../slices/moviesSlice';


const MovieCard = ({ posterPath, id, title, overview }) => {
    const dispatch = useDispatch()
    const handleClick = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        let index = json.results.find(video => video.type === 'Trailer')
        let video_key = index?.key ?? json.results[1]?.key
        dispatch(setTrailerVideo(video_key))
        dispatch(setMovieTitle({ title: title, overview: overview }))
    };

    return (
        <img className='w-52' src={POSTER_URL + posterPath} alt='Movie Card' onClick={handleClick}></img>
    )
}

export default MovieCard
