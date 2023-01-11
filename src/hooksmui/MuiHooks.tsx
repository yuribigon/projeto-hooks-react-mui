import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';


const MuiHooks: React.FC = () => {
    //tipo
    interface Growdever {
        name: string;
        email: string;
    }

    //estados
    const [growdevers, setGrowdevers] = useState<Growdever[]>([]);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    //handle
    const handleGrowdever = () => {
        let growdever : Growdever = {name, email} // monto o objeto
        growdevers.push(growdever); // coloco o objeto dentro do vetor
        setGrowdevers(growdevers); // mudo o vetor
        console.log(growdevers);
        setName("");
        setEmail("");        
    }


    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component='img'
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Growdevers"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Contatos de growdevers
                                </Typography>
                                <Box>
                                    <TextField label='Nome' value={name} onChange={e=>setName(e.target.value)}/>
                                    <TextField label='Email' value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
                                </Box>
                            </CardContent> 
                            <CardActions>
                                <Button size="small" variant="contained" onClick={handleGrowdever}>Salvar</Button>
                            </CardActions>                       
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>    
                                    <TableCell>Email</TableCell>    
                                    <TableCell>Action</TableCell>
                                </TableRow>                             
                            </TableHead>
                            <TableBody>
                                {growdevers.map((element, index) =>(
                                    <TableRow key={index}>
                                        <TableCell>{element.name}</TableCell>
                                        <TableCell>{element.email}</TableCell>                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
};

export default MuiHooks;
