import { Router } from "express";
import * as authService from "./auth.service.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import {validation} from "../../middleware/validation.midlleware.js";
import * as authSchemas from "./validation.schema.js"
const router = Router()


router.post("/register" ,validation(authSchemas.register) ,asyncHandler(authService.register) )
router.post("/login" , asyncHandler(authService.login) )
router.get("/activateAccount/:token" , asyncHandler(authService.activateAccount) )


export default router;