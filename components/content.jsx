import React from 'react'

const ContentLaine = () => {
    return (
        <div className='w-full py-20 space-y-10'>
            <div className='mx-auto'>
                <h3 className='font-bold text-3xl mx-auto text-center'>Ready To transform your <br /> mental state for the better?</h3>
                <p className='text-center mx-auto text-muted-foreground mt-3'>Start using Lainie and embark on your journey to mental bliss.</p>

            </div>
            <div className='w-full py-4 lg:py-6 flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between gap-8 lg:gap-0 h-fit'>
                <div id='about' className='w-full lg:w-1/2 flex flex-col justify-center h-fit'>
                    <img src="/bot.svg" className='w-2/3 mx-auto lg:ml-auto my-auto' alt="" />
                </div>
                <div className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit justify-center gap-3 lg:gap-10 px-3 lg:px-8'>
                    <h1 className='font-bold text-2xl lg:text-3xl mx-auto lg:mx-0'>Personalized Conversion</h1>
                    <p class="text-lg lg:text-xl text-muted-foreground">Lainie is trained so that she can tailor her support to your exact needs. As your interactions evolve so does her behavior.
                    </p>
                </div>

            </div>
            <div className='w-full py-4 lg:py-6 flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between gap-8 lg:gap-0 h-fit'>

                <div className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit justify-center gap-3 lg:gap-10 px-3 lg:px-8'>
                    <h1 className='font-bold text-2xl lg:text-3xl mx-auto lg:mx-0'>Unwavering Support</h1>
                    <p class="text-lg lg:text-xl text-muted-foreground">Lainie is available 24/7, providing continuous support whenever you need it. Whether you're facing a tough day or celebrating a small victory, she’s here to share the journey with you.
                    </p>
                </div>
                <div id='about' className='w-full lg:w-1/2 flex flex-col justify-center h-fit'>
                    <img src="/support.svg" className='w-2/3 mx-auto lg:ml-auto my-auto' alt="" />
                </div>

            </div>

            <div className='mx-auto'>
                <h3 className='font-bold text-3xl mx-auto text-center'>Take Control of Your mental wellbeing Journey</h3>
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                <div className='flex flex-col items-center gap-3 p-4 w-full lg:w-1/4 bg-] h-80 rounded-md'>
                    <div className='w-52 h-52'>
                        <img src="/anon.svg" alt="bot image" className='object-cover' />
                    </div>
                    <div className='text-center w-full'>
                        <span className='font-bold text-2xl'>Anonymous and Secure</span>
                        <p className='text-sm text-muted-foreground'>We prioritize your privacy. Lainie offers a secure and confidential platform, allowing you to express yourself freely without the fear of judgment. Your well-being is our top priority.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 p-4 w-full lg:w-1/4 bg-] h-80 rounded-md'>
                    <div className='w-52 h-52'>
                        <img src="/tailored.svg" alt="bot image" className='object-cover' />
                    </div>
                    <div className='text-center w-full'>
                        <span className='font-bold text-2xl'>Tailored Conversations</span>
                        <p className='text-sm text-muted-foreground'>Our AI is trained to understand and adapt to your unique communication style. This ensures that each conversation feels natural and personalized, creating a more effective and supportive experience.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 p-4 w-full lg:w-1/4 bg-] h-80 rounded-md'>
                    <div className='w-52 h-52'>
                        <img src="/freind.svg" alt="bot image" className='object-cover' />
                    </div>
                    <div className='text-center w-full'>
                        <span className='font-bold text-2xl'>Mindful Guidance</span>
                        <p className='text-sm text-muted-foreground'>Lainie provides gentle nudges and helpful resources based on your conversations. It's not just about talking; it's about empowering you with tools and insights to enhance your mental well-being.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 p-4 w-full lg:w-1/4 bg-] h-80 rounded-md'>
                    <div className='w-52 h-52'>
                        <img src="/learn.svg" alt="bot image" className='object-cover' />
                    </div>
                    <div className='text-center w-full '>
                        <span className='font-bold text-2xl'>Continuous Learning</span>
                        <p className='text-sm text-muted-foreground'>Our AI is constantly learning and evolving. This commitment to improvement allows us to better understand your needs over time, making each interaction more valuable and insightful.</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ContentLaine