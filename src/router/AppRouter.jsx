import {createBrowserRouter} from "react-router-dom"
import {authRoutes, publicRoutes} from "./routes.jsx"
import MainLayout from "../layouts/MainLayout.jsx"
import {HOME_ROUTE} from "../utils/consts.js"

export const AppRouter = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element: <MainLayout/>,
        children: [...authRoutes, ...publicRoutes],
    }
])
