import {Box, Typography} from "@mui/material"

export default function Footer() {
    return (
        <Box component="footer" sx={{p: 0.5, textAlign: "center", backgroundColor: "#f5f5f5"}}>
            <Typography variant="body2" sx={{letterSpacing: 3,color:"grey",fontSize:16}}>CREATED BY DANGEUS AND NOT SUPPORTED BY ANYONE
                ELSE</Typography>
        </Box>
    )
}