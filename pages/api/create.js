import prisma from '@/lib/prismadb'

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body.data
        const email = req.body.email

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        const {area, bathrooms, bedrooms, price} = data

         try {
            await prisma?.property?.create({
                data: {
                    ...data,
                    area: parseFloat(area),
                    bathrooms: parseInt(bathrooms),
                    bedrooms: parseInt(bedrooms),
                    price: parseInt(price),
                    postedByUserId: user.id
                }
             })
    
             res.status(200).json({message: "property created successfully"}, {status: 200})
         } catch (error) {
            res.status(500).json({message: "something went wrong", error})
            throw error
         }
    } else res.status(403).json({message: "wrong method used. Use POST instead"}, {status: 403})
}