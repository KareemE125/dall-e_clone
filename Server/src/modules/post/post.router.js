import { Router } from "express";

import { generatePost, getAllPosts } from "./post.controller.js";


const router = Router()

router.get('/',getAllPosts)
router.post('/',generatePost)

export default router;