import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieTitle } from '../slices/moviesSlice'

const MainContainer = () => {
    const dispatch = useDispatch()
    const movies = useSelector(Store => Store.movies.nowPlayingMovies)
    const movie = useSelector(store => store.movies.trailerOverview)
    if (movies == null) return
    const { id } = movies[0]
    dispatch(setMovieTitle({title: movie.title, overview: movie.overview}))
    return (
        <div>
            <VideoBackground id={id} />
            <VideoTitle title={movie.title} overview={movie.overview} />
        </div>
    )
}

export default MainContainer
