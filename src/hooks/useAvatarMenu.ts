import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {logout} from "../features/auth/authSlice";


export function useAvatarMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleProfile = () => {
        handleClose()
        navigate('/profile') // или другой путь к профилю
    }

    const handleLogout = async () => {
        handleClose()

        try {
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/logout`, {}, {
                withCredentials: true
            })
        } catch (error) {
            console.log(error)
        }

        dispatch(logout())
        navigate('/login')
    }

    return {
        anchorEl,
        open,
        handleClick,
        handleClose,
        handleProfile,
        handleLogout,
    }
}