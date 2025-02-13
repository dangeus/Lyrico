import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx"
import Main from "../components/layout/Main.jsx"
import {Outlet} from "react-router-dom"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from '../utils/theme.js'

export default function MainLayout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Main><Outlet/></Main>
            <Footer/>
        </ThemeProvider>
    )
}