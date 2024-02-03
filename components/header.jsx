// 'use client'
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
import { useProModal } from '@/lib/hooks/use-pro-modal'
import { checkSubscription } from '@/lib/subscriptions'
import { SettingsIcon } from 'lucide-react'

export async function Header() {
  // const [dataToSend, setDataToSend] = React.useState(''); // Initialize with an empty string or the default data
  const isPro = await checkSubscription();
  const {userId} = auth();
  // const promodal = useProModal();
  
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <SidebarProvider>
            <SidebarMobile>
              <ChatHistory userId={userId} />
            </SidebarMobile>
            <SidebarToggle />
          </SidebarProvider>
          <UserButton afterSignOutUrl='/' />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <span
          target="_blank"
          onClick={''}
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >

          <IconTelegram />
          <span className="hidden ml-2 md:flex cursor-pointer"  >Chat in Telegram</span>
        </span>
        <a href="/settings">
        <button
          target="_blank"
          className={cn(buttonVariants({ variant: 'pro' }))}
        >


          <span className="hidden mr-1 sm:block">{isPro ? 'Manage Subscription' : 'Get Alaine Pro'}</span>
          <span >
            <SettingsIcon size={16} />
          </span>
        </button>
        </a>
      </div>
    </header>
  )
}
