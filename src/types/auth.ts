export interface RegisterForm {
    username: string
    email: string
    password: string
    passwordConfirmation: string
}

export interface RegisterErrors {
    usernameError?: string | null
    emailError?: string | null
    passwordError?: string | null
    passwordConfirmationError?: string | null
}

export interface LoginForm {
    email: string
    password: string
}

export interface LoginErrors {
    emailError?: string | null
    passwordError?: string | null
}

export interface ValidationResult {
    valid: boolean
    message: string | null
}