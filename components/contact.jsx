import React from 'react'

const Contact = () => {
 
  return (
    <div className='w-full h-80 bg-[#ffe2f3] rounded-md flex flex-col items-center justify-center mb-20' id='contact'>
        <h2 className='text-2xl lg:text-3xl font-bold text-center px-3 lg:px-0'>Let's discuss your personal goals</h2>
        <div className='flex flex-col lg:flex-row items-center justify-between p-3 lg:p-10 w-full lg:w-2/3 gap-2'>
            <input type="text"  className='w-full lg:w-3/4 h-14 rounded-md px-4 outline-none' placeholder='Enter your email address'/>
            <button className='w-full lg:w-1/4 h-14 rounded-md font-semibold text-white bg-[#f364b8]'>Contact Me</button>
        </div>
    </div>
  )
}

export default Contact