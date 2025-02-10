import User from "./models/User.js"
import Role from "./models/Role.js"
import bcrypt from 'bcryptjs'
import {validationResult} from "express-validator"

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

        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async getUsers(req, res) {
        try {
            res.json('getUsers work!')
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
}

export default new authController()