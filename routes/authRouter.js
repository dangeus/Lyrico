import {Router} from "express"
import authController from "../controllers/authController.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const authRouter = new Router()

authRouter.post('/registration', authController.registration)
authRouter.post('/login', authController.login)
authRouter.post('/logout', authController.logout)
authRouter.get('/users', authMiddleware, authController.getUsers)
authRouter.get('/me', authMiddleware, authController.checkAuth)


export default authRouter