import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TRACK_ROUTE} from "./utils/consts.js"
import Admin from "./pages/Admin.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import Auth from "./pages/Auth.jsx"
import HomePage from "./pages/HomePage.jsx"
import TrackPage from "./pages/TrackPage.jsx"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
    },
    {
        path: PROFILE_ROUTE,
        element: <ProfilePage/>,
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