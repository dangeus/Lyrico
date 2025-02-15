import {Avatar, Box, Button, IconButton, Toolbar} from "@mui/material"
import NavLinks from "../widgets/NavLinks"
import SearchBar from "../ui/SearchBar"
import {useDispatch, useSelector} from "react-redux"

export default function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    return (
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", py: 1, px: 3}}>
            <NavLinks/>
            <Toolbar>
                <SearchBar/>
                {isAuthenticated ? (
                    <IconButton>
                        <Avatar/>
                    </IconButton>
                ) : (
                    <Button variant="contained">Login</Button>
                )}
            </Toolbar>
        </Box>
    )
}

