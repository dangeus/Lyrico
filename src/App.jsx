import React from 'react'
import {RouterProvider} from "react-router-dom"
import {AppRouter} from "./components/AppRouter.jsx"

export default function App() {
    return (
        <RouterProvider router={AppRouter}/>
    )
}