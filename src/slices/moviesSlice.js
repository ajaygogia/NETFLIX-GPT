import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovied: null,
        trailerVideo: null
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
        setTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const { addNowPlayingMovies, setTrailerVideo, addPopularMovies, addTopRatedMovies } = moviesSlice.actions
export default moviesSlice.reducer