import {Navigate, useLocation} from "react-router-dom"
import {LOGIN_ROUTE} from "../utils/consts.js"
import {useSelector} from "react-redux"

export default function RequireAuth({children}) {
    const location = useLocation()

    const {isAuthenticated} = useSelector(state => state.auth.isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to={LOGIN_ROUTE} replace state={{from: location}}/>
    }

    return children
}