/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import DropDownMenu from './DropDownMenu';

import '../css/NavBarStyle.css'
import logo from '../assets/logo.png'


export default function NavBar() 
{
    const [width, setWidth] = useState(null);
    const widthListener = useCallback(() => setWidth(window.innerWidth), [],)


    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', widthListener)
        return (() => {
            window.removeEventListener('resize', widthListener);
        })
    }, [])


    return <nav className='dark bg-black text-white shadow-md px-8 py-2 my-3 mx-2 rounded-[50px]  fixed top-0 left-0 right-0 z-50 flex items-center justify-between'>
        <NavLink className="flex items-center"  to='/'>
            <img className='w-9 mr-3' src={logo} alt=''/>
            <h1 className='text-[26px] font-bold logo'>DALL-E</h1>
        </NavLink>

        {
            width <= 700 ? <DropDownMenu />
            : <ul className='flex text-lg font-medium gap-x-4'>
                <li>
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to='/generate'>Generate</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to='/about-us'>About Us</NavLink>
                </li>
            </ul>
        }

    </nav>

}
