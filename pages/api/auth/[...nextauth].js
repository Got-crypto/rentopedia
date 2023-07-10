import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

import prisma from '@/lib/prismadb';


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    debug: true,
    theme: {
        colorScheme: 'light',
        logo: '/favicon-blue.png',
    },
    callbacks: {
        async signIn({user}) {
            const userExist = await prisma?.user.findUnique({
                where: {
                    email: user?.email
                }
            })

            if(!userExist) {
                await prisma?.user.create({
                    data: {
                        email: user?.email,
                        username: user?.name,
                        picture: user?.image,
                    }
                })
            }

            return true
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)