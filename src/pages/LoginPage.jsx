import {Link} from 'react-router-dom'
import {Box, TextField, Button, Typography, Container, Paper} from '@mui/material'
import {REGISTRATION_ROUTE} from "../utils/consts.js"
import {useState} from "react"
import axios from "axios"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${VITE_API_BASE_URL}/login`, {email, password})
            setEmailError('')
            setPasswordError('')
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);

            if (error.response?.data?.field === "email") {
                setEmailError(error.response.data.message)
                setEmail('')
                setPassword('')
            } else if (error.response?.data?.field === "password") {
                setPasswordError(error.response.data.message)
                setPassword('')
            } else {
                setEmailError("Ошибка входа")
                setPasswordError("Ошибка входа")
            }
        }
    }

    return (
        <Container sx={{pt: 10}} component="main" maxWidth="xs">
            <Paper elevation={3} sx={{p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        error={!!emailError}
                        helperText={emailError}
                        onFocus={() => setEmailError('')}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailError('')
                        }}
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
                        value={password}
                        error={!!passwordError}
                        helperText={passwordError}
                        onFocus={() => setPasswordError('')}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setPasswordError('')
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: "#482880"}}
                        onClick={handleLogin}
                    >
                        Sign in
                    </Button>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography sx={{color: "#673ab7"}} component={Link} to={REGISTRATION_ROUTE}>
                            No account? Sign up
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}