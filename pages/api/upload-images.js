import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
})

export default async function handler(req, res){
    if(req.method === 'POST') {
        const {path} = await req.body

        if(!path) {
            return res.status(400).json({message: "image required"}, {status: 400})
        }

        try {
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                transformation: [{height: 752, width: 1000, crop: 'scale'}]
            }

            const result = await cloudinary.uploader.upload(path, options)

            return res.status(200).json({result}, {status: 200})
        } catch (error) {
            res.status(500).json({error}, {status: 500})
        }
    } else res.status(403).end()
}