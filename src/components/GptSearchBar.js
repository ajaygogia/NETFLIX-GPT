import React from 'react'

const GptSearchBar = () => {
    return (
        <div className='flex justify-center pt-[10%]'>
            <form className='grid w-1/2 grid-cols-12 bg-black'>
                <input className='col-span-9 p-4 m-4' type='text' placeholder='Whats on your mind today'></input>
                <button className='bg-red-600 col-span-3 text-white m-4 rounded-md'>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar
