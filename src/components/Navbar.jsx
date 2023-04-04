import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [username, setUserName] = useState("")

    useEffect(() => {
        fetch("http://localhost:8800/api/profile", {
            credentials: "include",
        }).then(async (response) => {
            const data = await response.json()
            setUserName(data.username);
        })
    }, [])

    return (

        <div className='flex my-2 justify-between w-full h-10'>
            <Link href='/' className='font-bold text-2xl mx-2'>My Blog</Link>
            <div className='flex space-x-3 items-center text-lg mx-2'>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </div>

    )
}
