import { Router } from "express";
import { isAuthenticated } from "../../middleware/authintcation.middleware.js";
import isAuthorized from "../../middleware/authrization.middleware.js";
import { roles } from "../../DB/models/user.model.js";
import { validation } from "../../middleware/validation.midlleware.js";
import { sendMessage } from "./message.validation.shema.js";
import * as messageService from "./messages.service.js"
import { asyncHandler } from "../../utils/golobal error/asyncHandler.js";
const router = Router();
router.post("/" , isAuthenticated , isAuthorized(roles.user) , validation(sendMessage) ,asyncHandler(messageService.sendMessage) )


export default router;