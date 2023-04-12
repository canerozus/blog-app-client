import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import { UserContext } from '@/context/userContext';

export default function SinglePost() {
  const { userInfo } = useContext(UserContext)
  
  const router = useRouter()
  const { id } = router.query
  const [postInfo, setPostInfo] = useState(null)
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8800/api/post/${id}`)
        .then(response => response.json())
        .then(res => setPostInfo(res))
        .catch(error => console.error(error));
    }
  }, [id])
  const handleDelete = (e) => {
    fetch(`http://localhost:8800/api/post/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      router.push("/");
    })
    .catch(err =>console.log(err))
  }
  if (!postInfo) {
    return <div>Loading...</div>;
  }
  console.log(postInfo)
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center">{postInfo.title}</h1>
          <div>
            {userInfo?.id === postInfo.author._id && (
              [<button key="edit" className='bg-gray-800 text-white p-1 w-28 rounded m-2'>Edit Post</button>,
              <button key="delete" onClick={handleDelete} className='bg-red-600 text-white p-1 w-28 rounded m-2'>Delete Post</button>]
            )}

          </div>
        </div>
        <p className="text-center mb-4 font-semibold">by @{postInfo.author.username}</p>
        <time className="text-gray-600 block mb-4  text-center">{moment(postInfo.createdAt).fromNow()}</time>
        <div className="mb-8">
          <img className="w-full h-auto" src={'http://localhost:8800/' + postInfo.cover} alt={postInfo.title} />
        </div>
        <div className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </>
  )
}
