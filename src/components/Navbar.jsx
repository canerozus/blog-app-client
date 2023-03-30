import React from 'react'

export default function Navbar() {
    return (
        
            <div className='flex my-2 justify-between w-full h-10'>
            <a href='' className='font-bold text-2xl mx-2'>My Blog</a>
            <div className='flex space-x-3 items-center text-lg mx-2'>
                <a href=''>Login</a>
                <a href=''>Register</a>
            </div>
        </div>
        
    )
}
