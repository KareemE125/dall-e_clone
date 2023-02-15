import { Router } from "express";

import * as controller from "./main.controller.js";


const router = Router()

router.get('/',controller.getTest)
router.post('/',controller.generateImage)

export default router;