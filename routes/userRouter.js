import {Router} from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import userController from "../controllers/userController.js";

const userRouter = new Router()

userRouter.get('/me', authMiddleware, userController.getProfile)

export default userRouter