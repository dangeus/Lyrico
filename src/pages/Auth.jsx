import React from 'react'
import {useLocation} from "react-router-dom"

export default function Auth() {
    const fromPage = useLocation().state?.from?.pathname || '/'

    return (
        <div>
            Auth
        </div>
    )
}