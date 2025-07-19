import {ValidationResult} from "../types/auth";

export function isValidEmail(email: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email.trim()) {
        return {
            valid: false,
            message: 'Email is required'
        }
    }

    if (!emailRegex.test(email)) {
        return {
            valid: false,
            message: 'Invalid email format'
        }
    }

    return {
        valid: true,
        message: null
    }
}

export function isValidUsername(username: string): ValidationResult {
    const trimmed = username.trim()

    if (!trimmed) {
        return {valid: false, message: 'Username is required'}
    }

    if (trimmed.length < 3) {
        return {valid: false, message: 'Username must be at least 3 characters'}
    }

    if (trimmed.length > 20) {
        return {valid: false, message: 'Username must be at most 20 characters'}
    }

    const regex = /^[a-zA-Z0-9_]+$/
    if (!regex.test(trimmed)) {
        return {valid: false, message: 'Username can only contain letters, numbers, and underscores'}
    }

    return {valid: true, message: null}
}

export function isValidPassword(password: string): ValidationResult {
    if (!password) {
        return {valid: false, message: 'Password is required'}
    }

    if (password.length < 6) {
        return {valid: false, message: 'Password must be at least 6 characters'}
    }

    const hasLetter = /[a-zA-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)

    if (!hasLetter || !hasNumber) {
        return {valid: false, message: 'Password must contain both letters and numbers'}
    }

    return {valid: true, message: null}
}

export function isValidPasswordConfirm(password: string, confirm: string): ValidationResult {
    if (!confirm) {
        return {valid: false, message: 'Please confirm your password'}
    }

    if (password !== confirm) {
        return {valid: false, message: 'Passwords do not match'}
    }

    return {valid: true, message: null}
}
