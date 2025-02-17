import {ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TRACK_ROUTE} from "../utils/consts.js"
import Admin from "../pages/Admin.jsx"
import ProfilePage from "../pages/ProfilePage.jsx"
import LoginPage from "../pages/LoginPage.jsx"
import HomePage from "../pages/HomePage.jsx"
import TrackPage from "../pages/TrackPage.jsx"
import RequireAuth from "../hoc/RequireAuth.jsx"
import RegistrationPage from "../pages/RegistrationPage.jsx"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <RequireAuth><Admin/></RequireAuth>,
    },
    {
        path: PROFILE_ROUTE,
        element: <RequireAuth><ProfilePage/></RequireAuth>,
    },
]

export const publicRoutes = [
    {
        index: true,
        element: <HomePage/>,
    },
    {
        path: LOGIN_ROUTE,
        element: <LoginPage/>,
    },
    {
        path: REGISTRATION_ROUTE,
        element: <RegistrationPage/>,
    },

    {
        path: TRACK_ROUTE,
        element: <TrackPage/>,
    },
]