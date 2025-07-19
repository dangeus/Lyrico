import {createBrowserRouter} from "react-router-dom"
import {authRoutes, publicRoutes} from "./routes"
import MainLayout from "../layouts/MainLayout"
import {HOME_ROUTE} from "../utils/consts"

export const AppRouter = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element: <MainLayout/>,
        children: [...authRoutes, ...publicRoutes],
    }
])
