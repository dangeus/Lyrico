import { Link } from 'react-router-dom'
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material'
import { REGISTRATION_ROUTE } from '../utils/consts'
import { useLoginForm } from '../hooks/useLoginForm'

export default function LoginPage() {
    const { loginForm, errors, handleChange, handleLogin } = useLoginForm()

    return (
        <Container sx={{ pt: 10 }} component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">Login</Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={loginForm.email}
                        error={!!errors.emailError}
                        helperText={errors.emailError}
                        onChange={(e) => handleChange('email', e.target.value, 'emailError')}
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
                        value={loginForm.password}
                        error={!!errors.passwordError}
                        helperText={errors.passwordError}
                        onChange={(e) => handleChange('password', e.target.value, 'passwordError')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#482880' }}
                    >
                        Sign in
                    </Button>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#673ab7' }} component={Link} to={REGISTRATION_ROUTE}>
                            No account? Sign up
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}
