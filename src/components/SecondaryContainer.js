import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className='bg-black'>
    <div className='-mt-72 relative z-2 text-white'>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Popular'} movies={movies.popularMovies} />
      <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
      <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer
