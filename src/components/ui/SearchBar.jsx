import {Box, IconButton, TextField} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <Box sx={{display: "flex", alignItems: "center"}}>
            <TextField sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'black', // Цвет бордера по умолчанию
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'purple', // Цвет бордера при фокусе
                    },
                }
            }} slotProps={{
                input: {
                    sx: {
                        height: 35,
                    }
                }
            }} placeholder="Search . . ."/>
            <IconButton>
                <SearchIcon/>
            </IconButton>
        </Box>
    )
}