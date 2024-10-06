import { Grid2, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
    return (
        <Grid2
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid2
                className="box-shadow"
                size={{ xs: 3 }}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
            >
                <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
                <form action="">
                    <Grid2 container
                        spacing={2}>
                        <Grid2 size={{ xs: 12 }} >
                            <TextField
                                label="Correo"
                                type="email"
                                placeholder='correo@google.com'
                                fullWidth
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <TextField
                                label="Contraseña"
                                type="password"
                                placeholder='Contraseña'
                                fullWidth
                            />
                        </Grid2>
                    </Grid2>
                </form>
            </Grid2>
        </Grid2>
    )
}
