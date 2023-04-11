import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function SinglePost() {
    const router = useRouter()
    const { id } = router.query
    const [postInfo, setPostInfo] = useState(null)
    useEffect( () => {
         fetch(`http://localhost:8800/api/post/${id}`)
        .then(response => {
            response.json(postInfo => {
                setPostInfo(postInfo)
            })
        })
    },[])
  return (

    <div>id:{id}</div>
  )
}
