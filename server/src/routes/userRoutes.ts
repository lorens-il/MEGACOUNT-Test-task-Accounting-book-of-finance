import Router from "express";
import userController from "../controllers/userController.js";
import checkAuthMiddleware from "../middleware/checkAuthMiddleware.js";
import validateRequest from "../middleware/validateRequest.js"; 
import schemeValidateUser from "../schema/shemaValidateUser.js";

const router = Router();

router.post('/registration', validateRequest(schemeValidateUser), userController.registration)
router.post('/login', validateRequest(schemeValidateUser), userController.login)
router.get('/auth', checkAuthMiddleware, userController.getNewToken);

export default router