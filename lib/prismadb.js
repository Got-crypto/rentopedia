import { PrismaClient } from "@prisma/client"

const client = global.primadb || new PrismaClient()

if(process.env.NODE_ENV === 'production') global.prismadb = client

export default client