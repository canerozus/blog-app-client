import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '@/context/userContext';
export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [info, setInfo] = useState("");
    const [error, setError] = useState("");
    const {setUserInfo, userInfo} = useContext (UserContext)
    const router = useRouter();

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://blog-mern-app.herokuapp.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ username, password })
            })
            const data = await response.json()

            if (response.ok) {
                setUserInfo(data.id, data.username)
                setInfo(data.message)
                
                setTimeout(() => {
                    router.push("/");
                }, 1000);
                clearTimeout(setTimeout);
            } else {
                setError(data);
                setTimeout(() => {
                    setError(null);
                }, 2000);
                clearTimeout(setTimeout);
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-6">Welcome to the Blog App!</h1>
            <p className="text-lg text-center my-4">This is a blog app that allows users to create, edit and delete posts.</p>
            <form className="flex flex-col items-center" onSubmit={login}>
                <input type="text" placeholder='Username' className="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input type="password" placeholder='Password' className="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {info && <p className=''>{info}</p>}
                {error && <p className=''>{error}</p>}
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out mb-4 w-full md:w-40">Login</button>
                <p className="text-center text-gray-700">Don't have an account yet ? <Link href="/register" className="text-blue-500 hover:underline">Register</Link></p>
            </form>
        </>
    )
}