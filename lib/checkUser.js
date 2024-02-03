// import { auth } from "@clerk/nextjs";
const {auth} = require('@clerk/nextjs')

export default function checkCurrentUser(){
    const {userId} = auth();

    return userId;
}

