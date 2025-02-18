import express from 'express'
import mongoose from 'mongoose'
import authRouter from "./routes/authRouter.js"
import cors from 'cors'

const DB_URL = `mongodb+srv://minikepkrut:HCc8CMjMOKAE0KKr@cluster0.ypov3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', authRouter)


const startServer = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
    } catch (e) {
        console.log(e)
    }
}

startServer()