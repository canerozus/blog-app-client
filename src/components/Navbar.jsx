import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { UserContext } from '../context/userContext'

export default function Navbar() {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const username = userInfo?.username
    const router = useRouter();
    const currentPath = router.pathname;
  
    useEffect(() => {
        fetch("https://blog-app-backend-rose.vercel.app/api/profile", {
            credentials: "include",
        }).then((response) => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })

        }).catch((err) => {

            console.log(err)
        })
    }, []);
    const logout = () => {
        fetch("https://blog-app-backend-rose.vercel.app/api/auth/logout", {
            credentials: "include",
            method: "POST",
        })
        setUserInfo(null)
        
    }
    
    let navbarText = "";
    let dynamicRoute = "";

    if (currentPath === "/create") {
        dynamicRoute = "/";
      navbarText = "Home";
    } else if (currentPath === "/") {
    dynamicRoute = "/create";
      navbarText = "Create New Post";
    } else {
    dynamicRoute = "/";
    navbarText = "Home";
    }

    return (
        <>
            {username ?
                < div className='flex my-2 justify-between w-full h-10 '>
                    <Link href='/' className='font-bold text-2xl mx-2'>My Blog</Link>
                    <div className='flex space-x-3 items-center text-lg mx-2'>
                        <Link href={dynamicRoute}>{navbarText}</Link>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div >
                :
                < div className='flex my-2 justify-between w-full h-10'>
                    <Link href='/' className='font-bold text-2xl mx-2'>My Blog</Link>
                    <div className='flex space-x-3 items-center text-lg mx-2'>
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                    </div>
                </div >
            }
        </>
    )
}
