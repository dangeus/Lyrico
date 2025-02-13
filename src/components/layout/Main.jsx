import {Box, Container} from "@mui/material"

export default function Main({children}) {
    return (
        <Box component="main" sx={{backgroundColor:"red", height:"100vh" }}>
            {children}
        </Box>
    )
}