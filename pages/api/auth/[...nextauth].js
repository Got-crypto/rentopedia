import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

import prismadb from '@/lib/prismadb'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { compare } from "bcrypt"

export const authOptions = {
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'email',
                    name: 'email',
                },
                password: {
                    label: 'password',
                    name: 'password'
                }
            },
            authorize: async (credentials) => {
                if( credentials.email === '' || credentials.password === '' ) {
                    throw new Error('Email and password required')
                }

                
                const user = await prismadb.users.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                
                if(!user) throw new Error('User not found')
                
                const isCorrectPassword = await compare(credentials.password, user.password)
                
                if(!isCorrectPassword) throw new Error("Password incorrect")


                console.log('user', user)

                return user
            }
        })
    ],
    adapter: PrismaAdapter(prismadb),
    // session: {
    //     strategy: 'jwt'
    // },
    // jwt: {
    //     secret: process.env.NEXTAUTH_JWT_SECRET
    // },
    // secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)