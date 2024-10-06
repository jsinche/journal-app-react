import { Grid2 as Grid, Typography } from '@mui/material';

export interface AuthLayoutProps {
    children: React.ReactNode
    title?: string
}


export const AuthLayout = ({ children, title = '' }: AuthLayoutProps) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid
                className="box-shadow"
                sx={{
                    width: { sm: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }}
            >
                <Typography variant="h5" sx={{ mb: 2 }}>{title}</Typography>
                {children}
            </Grid>
        </Grid>
    )
}
