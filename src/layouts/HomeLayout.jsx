import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx"
import Main from "../components/layout/Main.jsx"
import {Outlet} from "react-router-dom"

export default function HomeLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Main><Outlet/></Main>
            <Footer/>
        </div>
    )
}