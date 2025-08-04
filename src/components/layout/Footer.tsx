import {Box, Typography} from "@mui/material"
import {JSX} from "react"

export default function Footer(): JSX.Element {
    return (
        <Box component="footer" sx={{p: 0.5, textAlign: "center", backgroundColor: "#f5f5f5"}}>
            <Typography variant="body2" sx={{letterSpacing: 3, color: "grey", fontSize: 16}}>
                CREATED BY PRBLMS AND NOT SUPPORTED BY ANYONE ELSE
            </Typography>
        </Box>
    )
}