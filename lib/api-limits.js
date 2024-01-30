import { auth } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";
import prismadb from '@/lib/prismadb'


const FREE_DAYS = 5;


function calculateDaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    return Math.round(Math.abs((date1 - date2) / oneDay));
}


export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    let userApiLimit = await prismadb.userAPILimit.findUnique({
        where: { userId: userId }
    });

    if (!userApiLimit) {
        userApiLimit = await prismadb.userAPILimit.create({
            data: {
                userId: userId,
            }
        });
    }

    const userCreatedDate = await clerkClient.users.getUser(userId);
    const freeDays = calculateDaysDifference(new Date(), new Date(userCreatedDate.createdAt))
    
    if((userApiLimit.premium === true && freeDays > FREE_DAYS) || (userApiLimit.premium===false && freeDays < FREE_DAYS)){
        return true;
    }else{
        return false;
    }


    // If userApiLimit doesn't exist or premium is not true
    // return false;
};

// // export const getUserApiLimit = async ()=>{
// //     const { userId } = auth()

// //     if(!userId){
// //         return 0;
// //     }

// //     const userApiLimit = await prisma.userAPILimit.findUnique({
// //         where:{userId}
// //     });

// //     if(!userApiLimit){
// //         return false;
// //     }


// //     return userApiLimit.premium;
// // };


// // export const increaseApiLimit = async () => {
// //     const { userId } = auth();

// //     if (!userId) {
// //         return;
// //     }

// //     const userApiLimit = await prisma.userAPILimit.findUnique({
// //         where: {
// //             userId
// //         }
// //     });

// //     if (userApiLimit) {
// //         await prisma.userAPILimit.update({
// //             where: {
// //                 userId: userId,
// //             },
// //             data: {
// //                 premium: true
// //             }
// //         });
// //     } else {
// //         await prisma.userAPILimit.create({
// //             data: { userId: userId, premium: false }
// //         });
// //     }
// // };