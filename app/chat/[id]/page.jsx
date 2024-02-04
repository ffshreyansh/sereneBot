import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'
import { nanoid } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import { notFound } from 'next/navigation'

export default async function ChatPage({ params }) {
  const session = auth()
  const id = params.id ?? nanoid()

  if (!session?.userId) {
    // redirect(`/sign-in?next=/chat/${params.id ?? ''}`)
  }

  const chat = await getChat(params.id, session?.userId)

  if (!chat) {
    notFound()
  }

  if (chat?.userId !== session?.userId) {
    notFound()
  }

  return (
    <Chat
      id={chat.id}
      initialMessages={chat.messages}
    />
  )
}

export async function generateMetadata({ params }) {
  const session = auth()

  if (!session?.userId) {
    return {}
  }

  const chat = await getChat(params.id, session.userId)
  return {
    title: chat?.title?.toString().slice(0, 50) || 'Chat',
  }
}
