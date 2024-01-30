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
// import { UserOrLogin } from './user-or-login'

// async function UserOrLogin() {

//   const userId = auth()?.userId

//   return (
//     <>
//       {userId ? (
//         <>
//           <SidebarProvider>
//             <SidebarMobile>
//               <ChatHistory userId={userId} />
//             </SidebarMobile>

//             <SidebarToggle />
//           </SidebarProvider>
//         </>
//       ) : (
//         <Link href="/" target="_blank" rel="nofollow">
//           <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
//           <IconNextChat className="hidden size-6 mr-2 dark:block" />
//         </Link>
//       )}
//       <div className="flex items-center gap-3">
//         {/* <IconSeparator className="size-6 text-muted-foreground/50" /> */}
//         <span className=' text-muted-foreground'>|</span>

//         <UserButton afterSignOutUrl='/' />

//       </div>
//     </>
//   )
// }

export async function Header() {
  // const promodal = useProModal();
  const isPro = await checkSubscription();
  const {userId} = auth();
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
          <UserButton />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://t.me/alainebot"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >

          <IconTelegram />
          <span className="hidden ml-2 md:flex">Chat in Telegram</span>
        </a>
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
