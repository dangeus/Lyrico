import {Navigate, useLocation} from "react-router-dom"
import {LOGIN_ROUTE} from "../utils/consts"
import {useSelector} from "react-redux"
import {RootState} from "../store/store";
import {JSX} from "react";

interface Props {
    children: JSX.Element
}

export default function RequireAuth({children}: Props): JSX.Element {
    const location = useLocation()

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to={LOGIN_ROUTE} replace state={{from: location}}/>
    }

    return children
}