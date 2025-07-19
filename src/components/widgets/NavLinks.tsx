import React, {JSX} from "react"
import {Link} from 'react-router-dom'
import {Box, Button, Divider} from "@mui/material"
import {HOME_ROUTE} from "../../utils/consts"

interface NavLink {
    name: string
    route: string
}

export default function NavLinks(): JSX.Element {
    const links: NavLink[] = [
        {name: 'HOME', route: HOME_ROUTE},
    ]

    return (
        <Box sx={{display: "flex"}}>
            {links.map((link, index) => (
                <React.Fragment key={link.route}>
                    {index !== 0 && <Divider sx={{borderColor: "black"}} orientation="vertical" flexItem/>}
                    <Button sx={{color: "#313131", px: 5}} component={Link} to={link.route}
                            disableRipple>{link.name}</Button>
                </React.Fragment>
            ))}
        </Box>
    )
}