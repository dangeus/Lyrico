import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import {Outlet} from "react-router-dom"
import {CssBaseline} from "@mui/material"
import Main from "../components/layout/Main"
import {JSX} from "react";

export default function MainLayout(): JSX.Element {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Main><Outlet/></Main>
            <Footer/>
        </>
    )
}