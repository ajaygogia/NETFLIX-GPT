import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovied: null,
        upcomingMovies: null,
        trailerVideo: null,
        trailerOverview: {}
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        setTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        setMovieTitle: (state, action) => {
            state.trailerOverview.title = action.payload.title
            state.trailerOverview.overview = action.payload.overview
        }
    }
})

export const { addNowPlayingMovies, setTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, setMovieTitle } = moviesSlice.actions
export default moviesSlice.reducer