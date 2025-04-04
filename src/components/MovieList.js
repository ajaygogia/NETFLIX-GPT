import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies) return
    return (
        <div className='m-4'>
            <h1 className='text-2xl font-bold pb-4'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide no-scrollbar'>
                <div className='flex gap-8'>
                    {
                        movies.map(movie => <MovieCard key={movie.id} id={movie.id} overview={movie?.overview} title={movie?.original_title} posterPath={movie.poster_path} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList
