import { Chat } from '@/components/chat'
import { nanoid } from '@/lib/utils'
import { auth } from '@clerk/nextjs'

export default async function IndexPage({ params }) {
  const session = auth()

  if (!session?.userId) {
    redirect(`/sign-in?next=/chat/${params.id}`)
  }

  return <Chat id={params.id ?? nanoid()} />
}
