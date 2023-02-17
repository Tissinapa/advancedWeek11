import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import{Link} from "react-router-dom"

//<Button color="inherit">Login</Button>


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button variant="contaned" color="white">Home</Button>
          </Link>
          <Link to="/about">
            <Button variant="contaned" color="white">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}






