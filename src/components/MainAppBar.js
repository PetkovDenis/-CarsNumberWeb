import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { BrowserRouter, Outlet } from 'react-router-dom';

export default function ButtonAppBar() {
   return(
   <BrowserRouter >
        <Box >
            <AppBar position="static"
                    style={{
                        color: "black",
                        backgroundColor: "#808080"
                    }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Маркетплейс
                    </Typography>

                    <a href="http://localhost:3000/registration" color="inherit">Регистрация</a>
                    <Outlet />
                </Toolbar>
            </AppBar>
        </Box>
    </BrowserRouter>
   );
}