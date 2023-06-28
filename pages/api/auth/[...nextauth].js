import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

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
            }
        })
    ]
}

export default NextAuth(authOptions)