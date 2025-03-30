import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../slices/moviesSlice'
import { useEffect } from 'react'

function useTopRatedMovies() {
    const dispatch = useDispatch()
    async function topRatedMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        topRatedMovies()
    }, [])
}

export default useTopRatedMovies