import {Box, TextField, Button, Typography, Container, Paper, Link} from '@mui/material'
import {useState} from "react"
import axios from "axios"

export default function RegistrationPage() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const API_BASE_URL = import.meta.env.API_BASE_URL

    const handleRegister = async () => {
        try {
            const responce = await axios.post(API_BASE_URL, {username, email, password})
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message)
        }
    }

    return (
        <Container sx={{pt: 10}} component="main" maxWidth="xs">
            <Paper elevation={3} sx={{p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: "#482880"}}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}