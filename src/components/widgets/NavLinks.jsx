import {Box, Button} from "@mui/material"
import {Home, Brush, GitHub} from "@mui/icons-material"
import LogoButton from "../ui/LogoButton.jsx"

export default function NavLinks() {
    return (
        <Box sx={{display: "flex", gap: 2}}>
            <LogoButton/>
            <Button startIcon={<Home sx={{color: "#d8b3d8", width: 30, height: 30}}/>}
                    sx={{color: "#606060", textTransform: "none"}}>HOME</Button>
            <Button startIcon={<GitHub sx={{color: "#d8b3d8", width: 30, height: 30}}/>}
                    sx={{color: "#606060", textTransform: "none"}}>GITHUB</Button>
            <Button startIcon={<Brush sx={{color: "#d8b3d8", width: 30, height: 30}}/>}
                    sx={{color: "#606060", textTransform: "none"}}>DEVIANTART</Button>
            <Button startIcon={<Brush sx={{color: "#d8b3d8", width: 30, height: 30}}/>}
                    sx={{color: "#606060", textTransform: "none"}}>DEVIANTART</Button>
            <Button startIcon={<Brush sx={{color: "#d8b3d8", width: 30, height: 30}}/>}
                    sx={{color: "#606060", textTransform: "none"}}>DEVIANTART</Button>
        </Box>
    )
}