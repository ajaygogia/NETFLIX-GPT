import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../slices/moviesSlice'
import { useEffect } from 'react'

function usePopularMovies() {
    const dispatch = useDispatch()
    async function popularMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        popularMovies()
    }, [])
}

export default usePopularMovies