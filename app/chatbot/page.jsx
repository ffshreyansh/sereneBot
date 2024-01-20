import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Chatbot = () => {
  return (
    <div>
        Chatbot-Protected
        <UserButton afterSignOutUrl='/'/>

    </div>
  )
}

export default Chatbot