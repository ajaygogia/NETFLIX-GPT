import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <img className='w-52' src={POSTER_URL + posterPath} alt='Movie Card'></img>
    )
}

export default MovieCard
