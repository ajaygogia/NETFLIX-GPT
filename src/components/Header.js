import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';


const Header = () => {
  const navigate = useNavigate()
  function signOutNetflix() {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='z-10 absolute flex justify-between px-8 py-2 w-screen bg-opacity-80 bg-gradient-to-b from-black'>
      <img className='w-40' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo'></img>
      <button className='text-white text-xl font-bold p-4' onClick={signOutNetflix}>Sign Out</button>
    </div>
  )
}

export default Header
