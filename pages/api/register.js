import prismadb from '@/lib/prismadb'
import bcrypt from 'bcrypt'

export default async function register(req, res) {
    if( req.method !== 'POST' ) return res.status(405).json({message: 'wrong method for the URL used. Try to use "GET" insted.'})

    try {
        const { email, password: plainText, username } = req.body

        const emailIsTaken = await prismadb.users.findUnique({
            where: {
                email
            }
        })

        if( emailIsTaken ) return res.status(409).json({message: 'Email already in use'})


        const saltRounds = await bcrypt.genSalt(12)
        const password = await bcrypt.hash(plainText, saltRounds)

        const response = await prismadb?.users?.create({
            email,
            username,
            password
        })

        return res.status(200).json({user: response})
    } catch (error) {
        res.status(500).json({message: "server failure", error})
    }
}