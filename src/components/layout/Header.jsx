import {Link} from 'react-router-dom'
import {AppBar, Avatar, Box, Button, IconButton, Toolbar} from "@mui/material"
import NavLinks from "../widgets/NavLinks"
import SearchBar from "../ui/SearchBar"
import {useSelector} from "react-redux"
import LoginIcon from '@mui/icons-material/Login';
import {LOGIN_ROUTE} from "../../utils/consts.js"

export default function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return (
        <AppBar sx={{backgroundColor: "#ffffff"}} elevation={0} position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <NavLinks/>
                <Box sx={{display: "flex", gap: 5, mr: 5}}>
                    <SearchBar/>
                    {isAuthenticated ? (
                        <IconButton>
                            <Avatar/>
                        </IconButton>
                    ) : (
                        <Button sx={{backgroundColor: "#673ab7"}} component={Link} to={LOGIN_ROUTE} variant="contained"
                                endIcon={<LoginIcon sx={{height: 30, width: 30}}/>}>Login</Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

