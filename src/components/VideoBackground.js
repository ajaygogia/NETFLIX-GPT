import React from 'react'
import {  useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo.js';

const VideoBackground = ({ id }) => {
  useTrailerVideo(id)
  let trailerId = useSelector(Store => Store?.movies?.trailerVideo)

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBackground
