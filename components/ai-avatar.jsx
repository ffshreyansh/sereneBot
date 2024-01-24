import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const BotAvatar = () => {
    return (
        <Avatar>
            <AvatarImage src="/serenebot.png" />
            <AvatarFallback>Dr</AvatarFallback>
        </Avatar>

    )
}
