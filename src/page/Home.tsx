import React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import MuiHooks from '../hooksmui/MuiHooks';

const Home: React.FC = () => {
  return (
    <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button variant='contained' color="primary">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Box>
            <MuiHooks/>
        </Box>        
    </React.Fragment>
  );
};

export default Home;
