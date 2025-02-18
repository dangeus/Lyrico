import {Router} from "express"
import authController from "../controllers/authController.js"
import authRoleMiddleware from "../middlewares/authMiddleware.js"

const authRouter = new Router()

authRouter.post('/registration', authController.registration)
authRouter.post('/login', authController.login)
authRouter.get('/users', authRoleMiddleware, authController.getUsers)

export default authRouter