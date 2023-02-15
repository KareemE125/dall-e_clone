import { Router } from "express";

import { generatePost } from "./post.controller.js";


const router = Router()

router.post('/',generatePost)

export default router;