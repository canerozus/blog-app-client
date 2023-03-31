import Link from 'next/link'
import React, { useState } from 'react'

export default function register() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);

    const register = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8800/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        const error = await response.json()
        if(error) return setError(error)

    }
    return (
        <>
            <form className="flex flex-col items-center" onSubmit={register}>
                <h1 className="text-3xl font-bold text-center my-6">Register for the Blog App!</h1>
                <input type="text" placeholder='Username' className="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <input type="password" placeholder='Password' className="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {error && <p className=''>{error}</p>}
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out mb-4 w-full md:w-40">Register</button>
                <p className="text-center text-gray-700">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
            </form>
        </>
    )
}
