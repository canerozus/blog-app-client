import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';


export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
  
    const handleLogin = (e) => {
      e.preventDefault();
      dispatch(login(username, password))
        .then(() => {
          setInfo('Login successful!');
          setTimeout(() => {
            router.push('/');
          }, 1000);
        })
        .catch((err) => {
          setError(err.message);
          setTimeout(() => {
            setError(null);
          }, 2000);
        });
    };

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-6">Welcome to the Blog App!</h1>
            <p className="text-lg text-center my-4">This is a blog app that allows users to create, edit and delete posts.</p>
            <form className="flex flex-col items-center" onSubmit={handleLogin}>
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
