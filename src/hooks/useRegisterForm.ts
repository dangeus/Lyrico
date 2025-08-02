import {useState, FormEvent} from 'react'
import {RegisterForm, RegisterErrors} from '../types/auth'
import {validateRegisterForm} from '../validation/validateRegisterForm'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function useRegisterForm() {
    const navigate = useNavigate()

    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })

    const [errors, setErrors] = useState<RegisterErrors>({})

    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    function handleChange<K extends keyof RegisterForm>(
        key: K,
        value: RegisterForm[K],
        errorKey: keyof RegisterErrors
    ) {
        setRegisterForm(prev => ({...prev, [key]: value}))
        setErrors(prev => ({...prev, [errorKey]: undefined}))
    }

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault()

        const newErrors = validateRegisterForm(registerForm)

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        try {
            await axios.post(`${VITE_API_BASE_URL}/registration`, {
                username: registerForm.username,
                email: registerForm.email,
                password: registerForm.password
            })

            setRegisterForm({
                username: '',
                email: '',
                password: '',
                passwordConfirmation: '',
            })

            navigate('/login')
        } catch (error) {
            console.log(error)
        }

        setErrors({})
    }

    return {registerForm, setRegisterForm, errors, setErrors, handleRegister, handleChange}
}