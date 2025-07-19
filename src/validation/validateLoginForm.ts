import {LoginErrors, LoginForm} from "../types/auth";
import {isValidEmail, isValidPassword, isValidPasswordConfirm, isValidUsername} from "./authValidation";

export function validateLoginForm(form: LoginForm): LoginErrors {
    const errors: LoginErrors = {}

    const emailCheck = isValidEmail(form.email)
    if (!emailCheck.valid) errors.emailError = emailCheck.message

    const passwordCheck = isValidPassword(form.password)
    if (!passwordCheck.valid) errors.passwordError = passwordCheck.message

    return errors
}