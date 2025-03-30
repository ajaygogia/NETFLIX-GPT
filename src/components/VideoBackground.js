import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setTrailerVideo } from '../slices/moviesSlice';

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch()
  let trailerId = useSelector(Store => Store?.movies?.trailerVideo)
  async function playVideo() {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS)
    const json = await data.json()
    let index = json.results.find(video => video.type == 'Trailer')
    let video_key = index.key ?? json.results[0].key
    dispatch(setTrailerVideo(video_key))
  }
  useEffect(() => {
    playVideo()
  }, [])

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
