import { PrismaClient } from '@prisma/client'
// import { withAccelerate } from '@prisma/extension-accelerate'

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
