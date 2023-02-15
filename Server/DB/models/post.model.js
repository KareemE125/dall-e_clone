import { model, Schema } from "mongoose";

const postSchema = new Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true }
}, { timestamps: true })

const PostModel = model('Post', postSchema);
export default PostModel;