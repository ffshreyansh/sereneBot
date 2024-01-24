import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconNextChat,
  IconSeparator,
  IconTelegram
} from '@/components/ui/icons'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { UserButton, auth } from '@clerk/nextjs'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { generateTelegramDeepLink } from '@/app/actions'

async function UserOrLogin() {
  const userId = auth()?.userId


  
  return (
    <>
      {userId ? (
        <>
          <SidebarProvider>
            <SidebarMobile>
              <ChatHistory userId={userId} />
            </SidebarMobile>

            <SidebarToggle />
          </SidebarProvider>
        </>
      ) : (
        <Link href="/" target="_blank" rel="nofollow">
          <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
          <IconNextChat className="hidden size-6 mr-2 dark:block" />
        </Link>
      )}
      <div className="flex items-center gap-3">
        {/* <IconSeparator className="size-6 text-muted-foreground/50" /> */}
        <span className=' text-muted-foreground'>|</span>

        <UserButton afterSignOutUrl='/' />

      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://t.me/alainebot?start=bThobC5"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
        
          <IconTelegram />
          <span className="hidden ml-2 md:flex">Chat in Telegram</span>
        </a>
        <a
          href="/chatbot"
          target="_blank"
          className={cn(buttonVariants({variant: 'pro'}))}
        >
       

          <span className="hidden mr-1 sm:block">Get Alaine </span>
          <span>Pro</span>
        </a>
      </div>
    </header>
  )
}
