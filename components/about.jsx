import Link from 'next/link'
import React from 'react'

const AboutComponent = () => {
  return (
    <div  className='w-full py-8 lg:py-0 flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between gap-8 lg:gap-0 h-fit'>
    <div className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit justify-center gap-4 lg:gap-10 px-3 lg:px-8'>
        <h1  className='font-bold text-2xl lg:text-4xl mx-auto lg:mx-0'>About Dr. Laine Bot</h1>
        <p class="text-sm lg:text-xl text-muted-foreground">The journey to mental well-being is unique for each individual. That's why we've crafted an AI chatbot that goes beyond just conversation – it's a companion dedicated to supporting you on your quest for serenity.
<br /> <br /> <strong>Her mission is simple:</strong> to provide a safe and empathetic space where you can openly express your thoughts and feelings. Lainie is more than just a chatbot; it's a virtual confidant, always ready to lend an understanding ear and offer guidance in times of need.
</p>
    </div>
    <div id='about' className='w-full lg:w-1/2 flex flex-col justify-center h-fit'>
        <img src="/lif.svg" className='mx-auto w-2/3 lg:ml-0 lg:mr-auto my-auto' alt="" />
    </div>
</div>
  )
}

export default AboutComponent