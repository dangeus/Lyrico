import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TRACK_ROUTE} from "./utils/consts.js"
import Admin from "./pages/Admin.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import Auth from "./pages/Auth.jsx"
import HomePage from "./pages/HomePage.jsx"
import TrackPage from "./pages/TrackPage.jsx"
import RequireAuth from "./hoc/RequireAuth.jsx"

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
        path: LOGIN_ROUTE,
        element: <Auth/>,
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>,
    },
    {
        path: HOME_ROUTE,
        element: <HomePage/>,
    },
    {
        path: TRACK_ROUTE,
        element: <TrackPage/>,
    },
]