import {useState, FormEvent} from 'react'
import {LoginForm, LoginErrors} from '../types/auth'
import {validateLoginForm} from "../validation/validateLoginForm"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {loginSuccess} from "../features/auth/authSlice"

export function useLoginForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<LoginErrors>({})

    const VITE_AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL

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

        try {
            const res = await axios.post(`${VITE_AUTH_API_BASE_URL}/login`, {
                email: loginForm.email,
                password: loginForm.password
            }, {withCredentials: true})

            dispatch(loginSuccess(res.data.user))

            setLoginForm({
                email: '',
                password: '',
            })

            navigate('/')
        } catch (error) {
            console.log(error)
        }

        setErrors({})
    }

    return {loginForm, errors, handleLogin, handleChange}
}
