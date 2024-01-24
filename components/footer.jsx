import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white  text-center p-10'>
            <div className='w-full h-fit flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-center lg:justify-between mx-auto max-w-screen-xl'>
                <div className='w-1/2 flex flex-col items-start gap-10'>
                    <span className='text-2xl font-bold'>
                        <img src="/serene.png" alt="" />
                    </span>
                    <div className='flex flex-col lg:flex-row gap-4 items-center font-medium text-white mx-auto lg:mx-0'>
                        <Link href={'#'}>Home</Link>
                        <Link href={'#about'}>About</Link>
                        <Link href={'#faq'}>FAQs</Link>
                        <Link href={'#contact'}>Contact</Link>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-10 items-end'>
                    <div className='flex items-center gap-4'>
                        <Link href={'fb.com'}>
                            <img src="/fb.svg" alt="facebook logo" className='w-10 h-10 cur' />
                        </Link>
                        <Link href={'fb.com'}>
                            <img src="/insta.svg" alt="instagram logo" className='w-10 h-10' />
                        </Link>
                        <Link href={'fb.com'}>
                            <img src="/yt.svg" alt="youtube logo" className='w-10 h-10' />
                        </Link>
                    </div>
                    <p className='text-xs text-muted-foreground mx-auto lg:mx-0'>Copyright © 2024 Lainie </p>
                </div>
            </div>
        </div>
    )
}

export default Footer