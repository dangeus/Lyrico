import jwt from "jsonwebtoken"
import config from "../config.js"

export default function (req, res, next) {
    if (req.method === 'OPTION') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({message: 'Пользователь не авторизован'})
        }
        req.user = jwt.verify(token, config.secret)
        next()
    } catch (error) {
        return res.status(403).json({message: 'Пользователь не авторизован'})
    }
}