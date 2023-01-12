import React from 'react';
import { Box, Grid } from '@mui/material';
import Navbar from '../components/NavBar';
import Form from '../components/Form';
import TableContacts from '../components/Table';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Box>
                <Grid container>
                    <Form />
                    <TableContacts />
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default Home;
