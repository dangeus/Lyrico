import {createBrowserRouter} from "react-router-dom"
import {authRoutes, publicRoutes} from "./routes.jsx"
import HomeLayout from "../layouts/HomeLayout.jsx"
import {HOME_ROUTE} from "../utils/consts.js"

export const AppRouter = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element: <HomeLayout/>,
        children: [...authRoutes, ...publicRoutes],
    }
])
