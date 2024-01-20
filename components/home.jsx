import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between h-screen'>
        <div className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit lg:h-screen justify-center gap-4 lg:gap-10 px-3 lg:px-8'>
            <h1 className='font-bold text-4xl lg:text-6xl'>Welcome to Mental Health Chat Bot</h1>
            <p class="text-md lg:text-xl text-muted-foreground">Ask questions, share your thoughts and get support for
            mental health issues. We are here to listen.</p>
            <Link href={'/sign-up'} className='w-full lg:w-1/2'>
                <button className='w-1/2 h-10 bg-[#e87749] text-white font-semibold rounded-md'>Get Started</button>
            </Link>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center h-fit lg:h-screen'>
            <img src="/anxiety.svg" className='mx-auto w-2/3 lg:ml-auto my-auto' alt="" />
        </div>
    </div>
  )
}

export default Home