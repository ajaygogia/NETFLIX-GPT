import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { setTrailerVideo } from "../slices/moviesSlice"

const useTrailerVideo = (id) =>{
    const dispatch = useDispatch()
    async function playVideo() {
      const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS)
      const json = await data.json()
      let index = json.results.find(video => video.type === 'Trailer')
      let video_key = index.key ?? json.results[0].key
      dispatch(setTrailerVideo(video_key))
    }
    useEffect(() => {
      playVideo()
    }, [])
}

export default useTrailerVideo