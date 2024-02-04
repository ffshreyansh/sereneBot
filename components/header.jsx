import TelegramLink from '@/components/telegram-link'
import { buttonVariants } from '@/components/ui/button'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { checkSubscription } from '@/lib/subscriptions'
import { cn } from '@/lib/utils'
import clerkClient from '@clerk/clerk-sdk-node'
import { UserButton, auth } from '@clerk/nextjs'
import { SettingsIcon } from 'lucide-react'
import { Suspense } from 'react'
import { ChatHistory } from './chat-history'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'

require('dotenv').config()

export async function Header({ id }) {
  const isPro = await checkSubscription()
  // const [dataToSend, setDataToSend] = React.useState(''); // Initialize with an empty string or the default data
  const session = auth()
  const token = await clerkClient.signInTokens.createSignInToken({
    expiresInSeconds: 30,
    userId: session.userId,
  })

  // const promodal = useProModal();
  const botusername = process.env.TELEGRAM_BOT_USERNAME
  const webappname = process.env.TELEGRAM_WEB_APP_NAME

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <SidebarProvider>
            <SidebarMobile>
              <ChatHistory userId={session.userId} />
            </SidebarMobile>
            <SidebarToggle />
          </SidebarProvider>
          <UserButton afterSignOutUrl="/" />
        </Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <TelegramLink
          botusername={botusername}
          webappname={webappname}
          token={token.id}
        />
        <a href="/settings">
          <button
            target="_blank"
            className={cn(buttonVariants({ variant: 'pro' }))}
          >
            <span className="hidden mr-1 sm:block">{isPro ? 'Manage Subscription' : 'Get Alaine Pro'}</span>
            <span>
              <SettingsIcon size={16} />
            </span>
          </button>
        </a>
      </div>
    </header>
  )
}
