import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export const getTest = (req, res) => {
    res.send('Hello From DALL-E')
}

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body
        
        const image = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })
        
        image = image.data.data[0].b64_json

        return res.status(200).json({ message: 'Success', image })
    }
    catch (error) {
        return res.status(500).json({ message: 'Fail', error: error.response?.data.error.message })
    }
}