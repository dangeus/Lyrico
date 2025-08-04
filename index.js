import express from 'express'
import mongoose from 'mongoose'
import authRouter from "./routes/authRouter.js"
import cors from 'cors'
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRouter.js";

const DB_URL = `mongodb+srv://minikepkrut:HCc8CMjMOKAE0KKr@cluster0.ypov3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

const startServer = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
    } catch (e) {
        console.log(e)
    }
}

startServer()