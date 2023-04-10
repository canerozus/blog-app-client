import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import { UserContext } from '../context/userContext'

export default function Navbar() {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const username = userInfo?.username
    
    useEffect(() => {
        fetch("http://localhost:8800/api/profile", {
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
        fetch("http://localhost:8800/api/auth/logout", {
            credentials: "include",
            method: "POST",
        })
        setUserInfo(null)
    }

    return (
        <>
            {username ?
                < div className='flex my-2 justify-between w-full h-10 '>
                    <Link href='/' className='font-bold text-2xl mx-2'>My Blog</Link>
                    <div className='flex space-x-3 items-center text-lg mx-2'>
                        <Link href="/create">Create New Post</Link>
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
