import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Navbar from '../components/NavBar';
import Form from '../components/Form';
import TableContacts from '../components/Table';
import { loadLocal } from '../utils/loadLocal';
import Growdever from '../types/growdevers';

const Home: React.FC = () => {

    const getStorage = loadLocal();
    const [growdevers, setGrowdevers] = useState<Growdever[]>([]);

    useEffect(() => {
         setGrowdevers(getStorage)
        }, [growdevers]);

    return (
        <React.Fragment>
            <Navbar />
            <Box>
                <Grid container>
                    <Form />
                    <TableContacts growdevers={growdevers} setGrowdevers={setGrowdevers}/>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default Home;
