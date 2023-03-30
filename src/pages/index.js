import Head from 'next/head'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
export default function Home() {
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <main className='flex w-10/12'>
        <div className='flex gap-8 flex-col mx-5 '>
          <Navbar />
          <Posts />
        </div>
      </main>

    </>
  )
}
