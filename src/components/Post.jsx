import React from 'react'
import moment from 'moment'
import Link from 'next/link'

export default function Post({_id, title, summary, cover, createdAt, author }) {

  return (
    <div className='flex flex-col '>
        <Link href={`/post/${_id}`} >
      <div className='flex gap-2 m-3 w-full flex-col sm:flex-row sm:items-start items-center'>
          <img className='sm:w-2/6 object-fit h-64' src={'http://localhost:8800/' + cover} alt="" />
        <div className='w-4/6 flex flex-col gap-5  text-start  mx-2 my-0 '>
          <h2 className='text-3xl font-bold overflow-x-hidden overflow-y-auto max-h-20 p-2'>{title}</h2>
          <div className='w-full px-2'>
            <a href='' className='font-bold mr-5'>{author.username}</a>
            <time>{moment(createdAt).fromNow()}</time>
          </div>
          <p className='overflow-x-hidden overflow-y-auto max-h-44 p-2' >{summary}</p>
        </div>
      </div>
        </Link>
    </div>
  )
}
