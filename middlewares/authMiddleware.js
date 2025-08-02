import jwt from "jsonwebtoken"
import config from "../config.js"

export default function (req, res, next) {
    const token = req.cookies.token;

    if (!token) return res.sendStatus(401);

    try {
        req.user = jwt.verify(token, config.secret)
        next()
    } catch {
        res.sendStatus(403)
    }
}