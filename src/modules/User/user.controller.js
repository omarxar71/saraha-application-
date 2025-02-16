import { Router } from "express";
import * as userService from "./user.service.js"
import { isAuthenticated } from "../../middleware/authintcation.middleware.js";
import isAuthorized from '../../middleware/authrization.middleware.js';
import { roles } from "../../DB/models/user.model.js";
import { validation } from '../../middleware/validation.midlleware.js';
import * as userValidationSchemas from "./user.validation.schema.js"
import { asyncHandler } from '../../utils/golobal error/asyncHandler.js';
const router = Router();
router.get("/", isAuthenticated,isAuthorized(roles.user),userService.profile )
router.get("/share/:userId",validation(userValidationSchemas.shareProfile),userService.shareProfile )

router.patch('/updateProfile' ,isAuthenticated,isAuthorized(roles.user), validation(userValidationSchemas.updateProfile) ,asyncHandler(userService.updateProfile))
router.patch('/updateProfile/password' ,isAuthenticated,isAuthorized(roles.user), validation(userValidationSchemas.updatePassword) ,asyncHandler(userService.updatePassword))
router.delete('/' ,isAuthenticated,isAuthorized(roles.user) ,asyncHandler(userService.freezeProfile))



export default router