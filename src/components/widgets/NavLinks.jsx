import {Box, Button, ButtonGroup} from "@mui/material"
import {Home, Brush, GitHub} from "@mui/icons-material"

export default function NavLinks() {
    return (
        <ButtonGroup variant="text" disableRipple>
            <Button sx={{color: "#606060", px:5}}>HOME</Button>
            <Button sx={{color: "#606060", px:5}}>GITHUB</Button>
            <Button sx={{color: "#606060", px:5}}>DEVIANTART</Button>
            <Button sx={{color: "#606060", px:5}}>DEVIANTART</Button>
            <Button sx={{color: "#606060", px:5}}>DEVIANTART</Button>
        </ButtonGroup>
    )
}