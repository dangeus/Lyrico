import {ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TRACK_ROUTE} from "../utils/consts"
import Admin from "../pages/Admin"
import ProfilePage from "../pages/ProfilePage"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import TrackPage from "../pages/TrackPage"
import RequireAuth from "../hoc/RequireAuth"
import RegistrationPage from "../pages/RegistrationPage"

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