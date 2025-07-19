import {useState, FormEvent} from 'react'
import {LoginForm, LoginErrors} from '../types/auth'
import {validateLoginForm} from "../validation/validateLoginForm";

export function useLoginForm() {
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<LoginErrors>({})

    function handleChange<K extends keyof LoginForm>(
        key: K,
        value: LoginForm[K],
        errorKey: keyof LoginErrors
    ) {
        setLoginForm(prev => ({...prev, [key]: value}))
        setErrors(prev => ({...prev, [errorKey]: undefined}))
    }

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault()

        const newErrors = validateLoginForm(loginForm)

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
    }

    return {loginForm, errors, handleLogin, handleChange}
}
