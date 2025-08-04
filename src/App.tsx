import React from 'react'
import {RouterProvider} from "react-router-dom"
import {AppRouter} from "./router/AppRouter"
import {useAuthCheck} from "./hooks/useAuthCheck"

export default function App() {
    useAuthCheck()

    return (
        <RouterProvider router={AppRouter}/>
    )
}