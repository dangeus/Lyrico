import {Navigate, useLocation} from "react-router-dom"
import {LOGIN_ROUTE} from "../utils/consts"
import {useSelector} from "react-redux"
import {RootState} from "../store/store"
import {JSX} from "react"
import Spinner from "../components/ui/Spinner"

export default function RequireAuth({children}: {children: JSX.Element}) {
    const location = useLocation()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const loading = useSelector((state: RootState) => state.auth.loading)

    if (loading) return <Spinner/>

    if (!isAuthenticated) {
        return <Navigate to={LOGIN_ROUTE} replace state={{from: location}}/>
    }

    return children
}