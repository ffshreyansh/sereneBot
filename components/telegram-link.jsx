'use client'

import { buttonVariants } from '@/components/ui/button'
import { IconTelegram } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
// import clerkClient from '@clerk/clerk-sdk-node'
import { useAuth } from '@clerk/nextjs'
import { useParams, useRouter } from 'next/navigation'

require('dotenv').config

export default function TelegramLink(props) {
  const params = useParams()
  const router = useRouter()
  const { userId, sessionId } = useAuth()

  const { botusername, webappname, token } = props

  const handleClick = () => {
    const uri = `chat_${params.id ?? ''}_tokenId_${token}`
    const href = `https://t.me/${botusername}/${webappname}?startapp=${uri}`

    console.log(href, uri)

    router.push(href)
  }

  return (
    <span
      className={cn(buttonVariants({ variant: 'outline' }))}
      onClick={handleClick}
    >
      <IconTelegram />
      <span className="hidden ml-2 md:flex cursor-pointer">Chat in Telegram</span>
    </span>
  )
}
