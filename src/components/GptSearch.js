import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_IMG } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={BACKGROUND_IMG} alt='Logo'></img>
            </div>
            <GptSearchBar />
        </div>
    )
}

export default GptSearch
