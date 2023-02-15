import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import PostModel from '../../../DB/models/post.model.js'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({})
        return res.status(200).json({ message: 'Success', posts })
    } catch (error) {
        return res.status(500).json({ message: 'Fail', error })

    }
}

export const generatePost = async (req, res) => {
    try {
        const { name, prompt, photo } = req.body
        const photoUrl = await cloudinary.uploader.upload(photo)

        const newPost = await PostModel.create({
            name,
            prompt,
            photo: photoUrl || 'photo url'
        })

        return res.status(201).json({ message: 'Success', data: newPost })
    } catch (error) {
        return res.status(500).json({ message: 'Fail', error })

    }
}