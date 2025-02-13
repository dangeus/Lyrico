import {Box, Button} from "@mui/material"
import NavLinks from "../widgets/NavLinks"
import SearchBar from "../ui/SearchBar"

export default function Header() {
    return (
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", py: 1, px: 3}}>
            <NavLinks/>
            <SearchBar/>
        </Box>
    )
}