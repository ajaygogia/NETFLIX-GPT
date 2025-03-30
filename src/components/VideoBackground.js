import React from 'react'
import {  useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo.js';

const VideoBackground = ({ id }) => {
  useTrailerVideo(id)
  let trailerId = useSelector(Store => Store?.movies?.trailerVideo)

  return (
    <div className='w-100'>
      <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerId + '?autoplay=1&mute=1'}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        autop
      ></iframe>
    </div>
  )
}

export default VideoBackground
