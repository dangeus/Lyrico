import {check} from "express-validator"

const usernameValidation = check('username', 'Имя пользователя не может быть пустым').notEmpty()

const passwordValidation = check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({
    min: 4,
    max: 10
})

export const authValidationMiddleware = [usernameValidation, passwordValidation]

