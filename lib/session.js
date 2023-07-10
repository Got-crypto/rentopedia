import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';

import prismadb from '@/lib/prismadb';

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
        async signIn(user) {
            console.log("##########################################");
            console.log("##########################################");
            console.log("##########################################");
            console.log("##########################################");
            console.log("##########################################");
            console.log("##########################################");
            console.log("##########################################");
            console.log("##########################################");
            console.log("##########################################");
            console.log('user', user)

            return true
        }
    },
    adapter: PrismaAdapter(prismadb),
    secret: process.env.NEXTAUTH_SECRET
}