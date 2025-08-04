import User from "../models/User.js"
import Role from "../models/Role.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config.js'

function generateAccessToken(id, roles) {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, config.secret, {expiresIn: '24h'})
}

class authController {
    async registration(req, res) {
        const {username, email, password} = req.body

        try {
            const existingUser = await User.findOne({
                $or: [{username}, {email}]
            })

            if (existingUser) {
                if (existingUser.username === username) {
                    return res.status(400).json({message: 'Nickname is busy', field: 'username'})
                }
                if (existingUser.email === email) {
                    return res.status(400).json({message: 'Email is busy', field: 'email'})
                }
            }

            const hashPassword = await bcrypt.hash(password, 7)

            let userRole = await Role.findOne({value: 'USER'})

            if (!userRole) {
                return res.status(500).json({message: 'Role USER not found'})
            }

            const user = new User({username, email, password: hashPassword, roles: [userRole.value]})

            await user.save()

            return res.status(201).json({message: 'Successful!'})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'Server error. Try again later'})
        }
    }

    async login(req, res) {
        const {email, password} = req.body

        try {
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: 'User was not found', field: 'email'})
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'Incorrect password entered', field: 'password'})
            }

            const token = generateAccessToken(user._id, user.roles)

            return res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'Strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
                .status(200)
                .json({user: user.username})
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async logout(req, res) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: 'Strict'
        })
        res.status(200).json({message: 'Successfully logged out'})
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

    async checkAuth(req, res) {
        try {
            res.status(200).json({user: req.user})
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

export default new authController()