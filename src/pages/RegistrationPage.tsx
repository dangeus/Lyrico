import {Box, TextField, Button, Typography, Container, Paper} from '@mui/material'
import {useRegisterForm} from '../hooks/useRegisterForm'

export default function RegistrationPage() {
    const {
        registerForm,
        errors,
        handleRegister,
        handleChange
    } = useRegisterForm()



    return (
        <Container sx={{pt: 10}} component="main" maxWidth="xs">
            <Paper
                elevation={3}
                sx={{p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}} onSubmit={handleRegister}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={registerForm.username}
                        error={!!errors.usernameError}
                        helperText={errors.usernameError}
                        onChange={(e) => handleChange('username', e.target.value, 'usernameError')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={registerForm.email}
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
                        autoComplete="new-password"
                        value={registerForm.password}
                        error={!!errors.passwordError}
                        helperText={errors.passwordError}
                        onChange={(e) => handleChange('password', e.target.value, 'passwordError')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="passwordConfirmation"
                        label="Password repeat"
                        type="password"
                        id="passwordRepeat"
                        autoComplete="new-password"
                        value={registerForm.passwordConfirmation}
                        error={!!errors.passwordConfirmationError}
                        helperText={errors.passwordConfirmationError}
                        onChange={(e) => handleChange('passwordConfirmation', e.target.value, 'passwordConfirmationError')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: '#482880'}}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}
