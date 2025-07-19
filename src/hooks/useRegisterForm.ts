import {useState, FormEvent} from 'react'
import {RegisterForm, RegisterErrors} from '../types/auth'
import {validateRegisterForm} from '../validation/validateRegisterForm'

export function useRegisterForm() {
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })

    const [errors, setErrors] = useState<RegisterErrors>({})

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault()

        const newErrors = validateRegisterForm(registerForm)

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
    }

    function handleChange<K extends keyof RegisterForm>(
        key: K,
        value: RegisterForm[K],
        errorKey: keyof RegisterErrors
    ) {
        setRegisterForm(prev => ({...prev, [key]: value}))
        setErrors(prev => ({...prev, [errorKey]: undefined}))
    }

    return {registerForm, setRegisterForm, errors, setErrors, handleRegister, handleChange}
}