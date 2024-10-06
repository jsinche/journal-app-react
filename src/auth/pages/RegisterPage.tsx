import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2 as Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form action="">
                <Grid container
                    spacing={2}>
                    <Grid size={{ xs: 12 }} >
                        <TextField
                            label="Nombre Completo"
                            type="text"
                            placeholder='Jean Alejandro Sinche Barra'
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }} >
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                        />
                    </Grid>

                    <Grid
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 2 }}
                        size={{ xs: 12 }}
                    >
                        <Grid size={{ xs: 12 }}>
                            <Button variant='contained' fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='end'
                        size={{ xs: 12 }}
                    >
                        <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
                        <Link
                            component={RouterLink}
                            color='inherit'
                            to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
