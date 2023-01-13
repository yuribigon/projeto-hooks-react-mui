import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Growdever from '../../types/growdevers';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export interface ITableProps {
    growdevers:Growdever[],
    setGrowdevers:React.Dispatch<React.SetStateAction<Growdever[]>>
}

const TableContacts = ({growdevers,setGrowdevers}:ITableProps) => {
   
    //>>>>>>>>>>>BOTÃO REMOVER - NÃO ESTÁ FUNCIONANDO <<<<<<<<<<
    const handleDelete = (id:number) =>{
        const index = growdevers.findIndex((el)=>el.id === id);
        setGrowdevers(growdevers.splice(index, 1));
    }

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
                                    <TableCell>
                                        <Button><EditIcon/></Button>
                                        <Button onClick={()=>handleDelete(index)}><DeleteIcon/></Button>
                                    </TableCell>
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
