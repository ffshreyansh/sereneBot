import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar>
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  )
}

export default UserAvatar