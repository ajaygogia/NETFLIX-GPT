import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(Store => Store.movies.nowPlayingMovies)
    if (movies == null) return
    const { original_title, overview, id } = movies[0]
    return (
        <div>
            <VideoBackground id={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer
