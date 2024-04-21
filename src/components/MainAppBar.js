import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 import "../css/Buttons.css";


import { BrowserRouter, Outlet } from 'react-router-dom';

export default function ButtonAppBar() {
   return(
   <BrowserRouter >
        <Box >
            <AppBar  style={{
                backgroundColor: "#FFFFE0",
                  }}>
                <Toolbar >
              <a  href="http://localhost:3000/" class="buttonMainPage"> Главная</a>
             <a   href="http://localhost:3000/numbers" class="buttonNumbers"> Номера</a>  
                    <a class="buttonMainPage" href="http://localhost:3000/logOrReg">Регистрация/Вход</a>
                    <Outlet />
                </Toolbar>
            </AppBar>
        </Box>
    </BrowserRouter>
   );
}