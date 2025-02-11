import User from "../models/User.js"
import Role from "../models/Role.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import {validationResult} from "express-validator"

function generateAccessToken(id, roles) {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, config.secret, {expiresIn: '24h'})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Ошибка при регистрации', errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует!'})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: 'USER'})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()
            return res.json({message: 'Пользователь успешно зарегистрирован!'})
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message: `Пользователь ${user} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
}

export default new authController()