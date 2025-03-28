import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../slices/userSlice'

const Body = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({ uid, email, displayName }))
      } else {
        dispatch(removeUser())
      }
    });
  })

  const appRoute = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body
