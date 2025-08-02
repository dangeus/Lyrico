import {useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {loginSuccess, logout} from '../features/auth/authSlice'

export function useAuthCheck() {
    const dispatch = useDispatch()
    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    useEffect(() => {
        axios.get(`${VITE_API_BASE_URL}/me`, {withCredentials: true})
            .then(res => {
                dispatch(loginSuccess(res.data.user))
            })
            .catch(() => {
                dispatch(logout())
            })
    }, [])
}
