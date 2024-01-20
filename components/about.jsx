import Link from 'next/link'
import React from 'react'

const AboutComponent = () => {
  return (
    <div className='w-full py-8 lg:py-0 flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between gap-8 lg:gap-0 h-fit'>
    <div className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit justify-center gap-4 lg:gap-10 px-3 lg:px-8'>
        <h1 className='font-bold text-2xl lg:text-4xl mx-auto lg:mx-0'>About Health Bot</h1>
        <p class="text-sm lg:text-xl text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel reiciendis quas magni impedit quibusdam temporibus omnis earum mollitia doloribus.</p>
    </div>
    <div className='w-full lg:w-1/2 flex flex-col justify-center h-fit'>
        <img src="/lifestyle.svg" className='mx-auto w-2/3 lg:ml-auto my-auto' alt="" />
    </div>
</div>
  )
}

export default AboutComponent