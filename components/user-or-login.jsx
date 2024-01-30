import * as React from 'react'
import Link from 'next/link'

// import { cn } from '@/lib/utils'
// import { Button, buttonVariants } from '@/components/ui/button'
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
// import { useProModal } from '@/lib/hooks/use-pro-modal'

export async function UserOrLogin() {
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