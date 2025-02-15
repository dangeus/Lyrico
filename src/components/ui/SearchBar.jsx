import {Box, Button, TextField} from "@mui/material"

export default function SearchBar() {
    return (
        <Box sx={{display: "flex", gap: 1}}>
            <TextField
                variant="outlined"
                placeholder="Search . . ."
                sx={{
                    background: "#f5f5f5",
                    borderRadius: 8,
                    width: 250,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                        height:30
                    },
                    height:30
                }}
            />
            <Button variant="contained" sx={{bgcolor: "#d8b3d8", color: "white"}}>POST</Button>
        </Box>

    )
}