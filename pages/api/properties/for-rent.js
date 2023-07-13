import prisma from '@/lib/prismadb'

export default async function handler(req, res) {
    if(req.method === 'GET') {
        try {
            const propertiesForRent =  await prisma.property.findMany({
                where: {
                    purpose: {
                        contains: 'rent',
                        mode: 'insensitive'
                    }
                },
                orderBy: {
                    listedOn: 'desc'
                },
                take:10,
            })
    
            res.status(200).json({propertiesForRent})
        } catch (error) {
            console.log('error', error)
            res.status(500).json({error})
        }
    } else res.status(403).json({message: 'wrong method used. Use GET instead'})
}