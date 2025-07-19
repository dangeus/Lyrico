export interface RegisterForm {
    username: string
    email: string
    password: string
    passwordConfirmation: string
}

export interface FormErrors {
    usernameError?: string | null
    emailError?: string | null
    passwordError?: string | null
    passwordConfirmationError?: string | null
}

export interface ValidationResult {
    valid: boolean
    message: string | null
}