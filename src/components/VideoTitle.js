import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
  const movie = useSelector(store => store.movies.trailerOverview)
  const trailer = useSelector(store => store.movies.trailerVideo)
  function navigateToYoutube() {
    window.open('https://www.youtube.com/watch?v=' + trailer, '_blank')
  }
  return (
    <div className='text-white top-0 py-[20%] bg-opacity-70 absolute pl-24 w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-bold text-7xl my-6'>{movie?.title}</h1>
      <p className='w-1/4'>{movie?.overview}</p>
      <div className='mt-6'>
        <button className='w-44 h-14 text-black border-gray-600 rounded-md bg-gray-100 hover:bg-opacity-80' onClick={navigateToYoutube}>Play ▶️</button>
        <button className='w-44 h-14 border-gray-600 bg-opacity-50 rounded-md cursor-default bg-gray-500 ml-6'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
