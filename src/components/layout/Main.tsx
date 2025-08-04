import {Box} from "@mui/material"
import {JSX} from "react"

interface Props {
    children: JSX.Element
}

export default function Main({children}: Props): JSX.Element {
    return (
        <Box component="main" sx={{backgroundColor: "#8561c5", height: "100vh"}}>
            {children}
        </Box>
    )
}