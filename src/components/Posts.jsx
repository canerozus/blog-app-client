import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import Link from "next/link";
import { UserContext } from '@/context/userContext';
import { useRouter } from 'next/router';
export default function Posts() {
    const router = useRouter();
    const { userInfo } = useContext(UserContext)

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("http://localhost:8800/api/post").then(response => {
            response.json().then(post => {
                setPosts(post)
            })
        })
    }, [])

    const handleClick = (e) => {
        if (!userInfo) {
            e.preventDefault()
            router.push("/login")
        }
    }

    return (
        <div className='h-screen'>
            {posts.length > 0 ? (
                posts.map((post) => <Post key={post._id} {...post} />)
            ) : (
                <div className=" flex flex-col text-center gap-2 text-gray-400 w-full min-h-screen justify-center">
                    <p className="mb-2">There are no posts yet.</p>
                    <p>Be the first one to create!</p>
                    <Link href="/create">
                        <button onClick={handleClick} className="w-32 inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Create post</button>
                    </Link>
                </div>
            )}
        </div>
    )
}
