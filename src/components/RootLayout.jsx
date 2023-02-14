import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'


export default function RootLayout()
{

  return <>
    <NavBar/>
    <div className='dark w-full pt-28 px-6 sm:px-10'>
      <Outlet></Outlet>
    </div>
  </>
}
