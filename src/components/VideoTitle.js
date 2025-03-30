import React from 'react'

const VideoTitle = ({ overview, title }) => {
  return (
    <div className='text-white top-0 py-[20%] bg-opacity-70 absolute pl-24 w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-bold text-7xl my-6'>{title}</h1>
      <p className='w-1/4'>{overview}</p>
      <div className='mt-6'>
        <button className='w-44 h-14 text-black border-gray-600 rounded-md bg-gray-100 hover:bg-opacity-80'>Play ▶️</button>
        <button className='w-44 h-14 border-gray-600 bg-opacity-50 rounded-md bg-gray-500 ml-6 hover:bg-opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
