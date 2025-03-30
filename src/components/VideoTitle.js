import React from 'react'

const VideoTitle = ({ overview, title }) => {
  return (
    <div className='w-1/4 top-1/4 absolute left-12'>
      <h1 className='text-bold text-7xl my-6'>{title}</h1>
      <p>{overview}</p>
      <div className='mt-6'>
        <button className='w-44 h-14 text-white border-gray-600 bg-opacity-50 rounded-md bg-gray-500'>Play ▶️</button>
        <button className='w-44 h-14 text-white border-gray-600 bg-opacity-50 rounded-md bg-gray-500 ml-6'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
