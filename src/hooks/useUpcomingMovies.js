import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../slices/moviesSlice'
import { useEffect } from 'react'

function useUpcomingMovies() {
    const dispatch = useDispatch()
    async function upcomingMovies() {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        upcomingMovies()
    }, [])
}

export default useUpcomingMovies