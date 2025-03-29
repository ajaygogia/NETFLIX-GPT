import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../slices/userSlice'
import { NETFLIX_LOGO } from '../utils/constants';



const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe()
  }, [])
  function signOutNetflix() {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
  return (
    <div className='z-10 absolute flex justify-between px-8 py-2 w-screen bg-opacity-80 bg-gradient-to-b from-black'>
      <img className='w-40' src={NETFLIX_LOGO} alt='Logo'></img>
      {user &&
        <div className='flex z-10 text-white items-center'>
          <p>Welcome {user?.displayName} !</p>
          <button title='Sign Out' className='text-white text-xl font-bold p-4' onClick={signOutNetflix}>⛔</button>
        </div>
      }
    </div>
  )
}

export default Header
