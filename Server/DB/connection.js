import mongoose from "mongoose";

export default async function connectDB(url) {
    mongoose.set('strictQuery', true)

    return await mongoose.connect(url)
        .then(_ => console.log("Database Connected ....."))
        .catch(error => console.log("Fail to Connect Database ===> ", error))
}