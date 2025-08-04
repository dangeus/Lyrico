import {Link} from 'react-router-dom'
import {AppBar, Box, Button, Toolbar} from "@mui/material"
import NavLinks from "../widgets/NavLinks.js"
import SearchBar from "../ui/SearchBar.js"
import {useSelector} from "react-redux"
import LoginIcon from '@mui/icons-material/Login'
import {LOGIN_ROUTE} from "../../utils/consts"
import type {RootState} from "../../store/store"
import React, {JSX} from "react"
import AvatarIcon from "../ui/AvatarIcon"

export default function Header(): JSX.Element {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    return (
        <AppBar sx={{backgroundColor: "#ffffff"}} elevation={0} position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <NavLinks/>
                <Box sx={{display: "flex", gap: 5, mr: 5}}>
                    <SearchBar/>
                    {isAuthenticated ? (
                        <AvatarIcon/>
                    ) : (
                        <Button sx={{backgroundColor: "#673ab7"}} component={Link} to={LOGIN_ROUTE} variant="contained"
                                endIcon={<LoginIcon sx={{height: 30, width: 30}}/>}>Login</Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

