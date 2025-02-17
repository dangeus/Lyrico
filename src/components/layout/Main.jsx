import {Box} from "@mui/material"

export default function Main({children}) {
    return (
        <Box component="main" sx={{backgroundColor:"#8561c5", height:"100vh" }}>
            {children}
        </Box>
    )
}