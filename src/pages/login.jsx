import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <>
            <h1 class="text-3xl font-bold text-center my-6">Welcome to the Blog App!</h1>
            <p class="text-lg text-center my-4">This is a blog app that allows users to create, edit and delete posts.</p>
            <form class="flex flex-col items-center">
                <input type="text" placeholder='Username' class="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96" />
                <input type="password" placeholder='Password' class="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96" />
                <button class="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out mb-4 w-full md:w-40">Login</button>
                <p class="text-center text-gray-700">Don't have an account yet ? <Link href="/register" class="text-blue-500 hover:underline">Register</Link></p>
            </form>
        </> 
    )
}
