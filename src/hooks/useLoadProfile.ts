import {useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {setLoading, setProfile, setError} from "../features/profile/profileSlice";

export function useLoadProfile() {
    const dispatch = useDispatch()
    const VITE_USER_API_BASE_URL = import.meta.env.VITE_USER_API_BASE_URL

    useEffect(() => {
        dispatch(setLoading(true))

        axios.get(`${VITE_USER_API_BASE_URL}/me`, {withCredentials: true})
            .then(res => {
                dispatch(setProfile(res.data))
                dispatch(setLoading(false))
            })
            .catch(error => {
                dispatch(setError(error))
                dispatch(setLoading(false))
            })
    }, [])
}