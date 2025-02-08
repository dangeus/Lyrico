import {createBrowserRouter} from "react-router-dom"
import {authRoutes, publicRoutes} from "../routes.jsx"

export const AppRouter = createBrowserRouter([...authRoutes, ...publicRoutes])
