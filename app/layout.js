import ModalProvider from '@/components/modal-provider'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alaine | Mental health coach',
  description: 'Your 24/7 mental health coach',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script src="https://telegram.org/js/telegram-web-app.js"></script>
        </head>
        <body className={cn(inter.className)}>
          <ModalProvider />
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
