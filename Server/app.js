import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './DB/connection.js'
import postRouter from './src/modules/post/post.router.js'
import mainRouter from './src/modules/main/main.router.js'

dotenv.config()

const BASE_URL = '/api/v1'
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use(`${BASE_URL}/post`, postRouter)
app.use(`${BASE_URL}/main`, mainRouter)

app.use('*', (req, res) => res.send('404 Page Not Found'))

connectDB(process.env.MONGODB_URL);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))