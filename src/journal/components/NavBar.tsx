import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Grid2 as Grid, Typography } from '@mui/material';
export interface NavBarProps {
    drawerWidth: number
}
export const NavBar = ({ drawerWidth = 240 }: NavBarProps) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    size={{ xs: 12 }}
                >
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'>
                        JournalApp
                    </Typography>
                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
