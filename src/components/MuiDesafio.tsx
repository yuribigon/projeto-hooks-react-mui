import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const Desafio: React.FC = () => {
  return (
    <>
        <Grid container>
            <Grid item xs={12} sm={4} sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'info.dark'
                    }}>
                <Box>1</Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'warning.dark'
                    }}>
                <Box>2</Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'success.dark'
                    }}>
                <Box>3</Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'error.dark'
                    }}>
                <Box>4</Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'secondary.dark'
                    }}>
                <Box>5</Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark'
                    }}>
                <Box>6</Box>
            </Grid>           
        </Grid>        
    </>
  );
};

export default Desafio;