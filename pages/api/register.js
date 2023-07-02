import prismadb from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import { ObjectId } from 'bson';

export default async function register(req, res) {
    if( req.method !== 'POST' ) return res.status(405).json({message: 'wrong method for the URL used. Try to use "GET" insted.'})

    try { 
        const { email, password: plainText, username, picture } = req.body
        
        
        const emailIsTaken = await prismadb.users.findUnique({
            where: {
                email
            }
        })
        
        if( emailIsTaken ) {
            return res.status(409).json({message: 'Email already in use'})
        }
        
        
        const saltRounds = await bcrypt.genSalt(12)
        const password = await bcrypt.hash(plainText, saltRounds)
        const id = new ObjectId

        const data = {
            email,
            username,
            password,
            picture,
            id: id.toString()
        }
        const response = await prismadb?.users?.create({data})
        console.log('response', response)

        return res.status(200).json({user: {username, email, id: response.id, photoUrl: response.picture}})
    } catch (error) {
        res.status(500).json({message: "server failure", error})
    }
}