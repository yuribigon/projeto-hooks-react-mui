import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import React from 'react';

const MuiLayout: React.FC = () => {
  return (
    // component
    <>
        <Box>
            <Typography variant="body1" color="initial">Olá eu sou uma div</Typography>
        </Box>
        <Box component="span">SPAN</Box>
        <Box component="header">HEADER</Box>
        <Box sx={{
            color: 'white',
            height: '100px',
            width: '100px',
            backgroundColor: 'primary.main'
        }}>
            Por padrão é div e você pode mudar esse comportamento
        </Box>
        <Stack justifyContent='center' direction='row'>
            <Box>Div 1</Box>
            <Box>Div 2</Box>
        </Stack>
        <Divider sx={{margin: 2}}/>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Box bgcolor="primary.main">AZUL</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor="primary.dark">DARK</Box>
            </Grid>            
        </Grid>
        
    </>
  );
};

export default MuiLayout;
