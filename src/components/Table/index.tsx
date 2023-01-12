import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Growdever from '../../types/growdevers';



const TableContacts: React.FC = () => {

    //estados
    const [growdevers, setGrowdevers] = useState<Growdever[]>([]);

    //localStorage    
    const loadLocal = () => {
        const db = localStorage.getItem("DBgrowdevers");
        return db !== null ? JSON.parse(db) : [];
    }

    const handleGrowdevers = () => {
        setGrowdevers(loadLocal)
    }

    useEffect(() => { handleGrowdevers(); }, []);

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Telefone</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {growdevers.map((element, index) => (
                                <TableRow key={index}>
                                    <TableCell>{element.name}</TableCell>
                                    <TableCell>{element.email}</TableCell>
                                    <TableCell>{element.phone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </React.Fragment>
    );
};

export default TableContacts;
