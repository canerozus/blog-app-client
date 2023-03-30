import Link from 'next/link'
import React from 'react'

export default function register() {
    return (
<>
    <h1 class="text-3xl font-bold text-center my-6">Register for the Blog App!</h1>
    <form class="flex flex-col items-center">
        <input type="text" placeholder='Username' class="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96" />
        <input type="password" placeholder='Password' class="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96" />
        <input type="password" placeholder='Confirm Password' class="border border-gray-400 rounded-lg py-2 px-3 mb-4 w-full md:w-96" />
        <button class="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out mb-4 w-full md:w-40">Register</button>
        <p class="text-center text-gray-700">Already have an account? <Link href="/login" class="text-blue-500 hover:underline">Login</Link></p>
    </form>
</>
    )
}
