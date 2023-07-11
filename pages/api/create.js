import prismadb from '@/lib/prismadb'

export default async function handler(req, res) {
    if(req.method === 'POST') {
         try {
            await prismadb.property.create({
                data: {
                    ...req.body
                }
             })
    
             res.status(200).json({message: "property created successfully"}, {status: 200})
         } catch (error) {
            res.status(500).json({message: "something went wrong"}, {status: 500})
            throw error
         }
    } else res.status(403).json({message: "wrong method used. Use POST instead"}, {status: 403})
}