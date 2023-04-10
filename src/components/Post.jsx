import React from 'react'

export default function Post({title,summary,fileUrl,content}) {
  return (
    <div className='flex flex-col '>
    <div className='flex gap-2 m-3 w-full flex-col sm:flex-row sm:items-start items-center'>
        <img className='w-2/5' src={fileUrl} alt="" />
        <div className='w-3/5 flex flex-col gap-5  text-start  mx-2 my-0 '>
            <h2 className='text-2xl font-bold overflow-x-hidden overflow-y-auto max-h-20 p-2'>{title}</h2>
            <div className='w-full px-2'>
                <a href='' className='font-bold mr-5'>Dawid</a>
                <time>05/02/2020</time>
            </div>
            <p className='overflow-x-hidden overflow-y-auto max-h-44 p-2' >{summary}</p>
        </div>
    </div>
</div>
  )
}
