import React, { useRef, useState } from 'react'
import Header from './Header'
import { validators } from '../utils/validators'

const Login = () => {
  let [signIn, setSignIn] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null)

  function toggleSignIn() {
    setSignIn(!signIn)
  }

  function signInClicked() {
    const message = validators(email.current.value, password.current.value)
    setErrorMessage(message)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_small.jpg' alt='Logi'></img>
      </div>
      <form className='absolute mx-auto left-0 right-0 bg-black w-3/12 flex-col text-center h-auto rounded-xl mt-44 bg-opacity-80'>
        <h1 className='text-white text-3xl align text-left ml-8 py-2'>{signIn ? 'Sign In' : 'Sign Up'}</h1>
        <input ref={email} type='text' className='m-2 p-3 w-9/12 text-center bg-black border border-white text-white rounded-sm' placeholder='Email or mobile number'></input>
        <input ref={password} type='password' className='m-2 p-3 w-9/12 text-center bg-black border border-white text-white rounded-sm' placeholder='Password'></input>
        <p className='text-red-600 font-bold my-4 mx-auto w-9/12 text-left'>{errorMessage}</p>
        <button type='button' className='m-2 p-2 w-9/12 text-center rounded-lg bg-red-600 text-white' onClick={signInClicked}>{signIn ? 'Sign In' : 'Sign Up'}</button>
        {signIn && <p className='text-white'>Or</p>}
        {signIn && <button type='button' className='m-2 p-2 w-9/12 text-center rounded-lg bg-gray-400 text-white'>Use a sign-in code</button>}
        <p className='text-white block m-4'>{signIn ? 'New to Netflix?' : 'Already a User?'} <a className='underline cursor-pointer' onClick={toggleSignIn}>{signIn ? 'Sign-up' : 'Sign-in'}</a> Now!</p>
      </form>
    </div>
  )
}

export default Login
