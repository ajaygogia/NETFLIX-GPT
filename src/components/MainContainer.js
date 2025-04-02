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
    const { original_title, overview, id } = movies[0]
    if (!movie?.title) {
        dispatch(setMovieTitle({ title: original_title, overview: overview }))
    }
    return (
        <div>
            <VideoBackground id={id} />
            <VideoTitle />
        </div>
    )
}

export default MainContainer
