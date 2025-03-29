import React from 'react'
import Header from './Header'
import nowPlayingMovies from '../hooks/useNowPlayingMovies'


const Browse = () => {
  nowPlayingMovies()
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse
