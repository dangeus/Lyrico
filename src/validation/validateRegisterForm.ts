import {RegisterForm, FormErrors} from '../types/auth'
import {isValidUsername, isValidEmail, isValidPassword, isValidPasswordConfirm} from './registerValidation'

export function validateRegisterForm(form: RegisterForm): FormErrors {
    const errors: FormErrors = {}

    const usernameCheck = isValidUsername(form.username)
    if (!usernameCheck.valid) errors.usernameError = usernameCheck.message

    const emailCheck = isValidEmail(form.email)
    if (!emailCheck.valid) errors.emailError = emailCheck.message

    const passwordCheck = isValidPassword(form.password)
    if (!passwordCheck.valid) errors.passwordError = passwordCheck.message

    const confirmCheck = isValidPasswordConfirm(form.password, form.passwordConfirmation)
    if (!confirmCheck.valid) errors.passwordConfirmationError = confirmCheck.message

    return errors
}
