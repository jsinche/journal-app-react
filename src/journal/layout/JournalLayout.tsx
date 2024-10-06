import { Box } from "@mui/material"
import { NavBar } from "../components";

export interface JournalLayoutProps {
    children: React.ReactNode
}
const drawerWidth = 240;
export const JournalLayout = ({ children }: JournalLayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar drawerWidth={drawerWidth} />
            {/* Sidebar drawerWidth*/}
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toobar */}
                {children}
            </Box>
        </Box>
    )
}
