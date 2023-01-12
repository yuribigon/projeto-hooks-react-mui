import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';


const MuiHooks: React.FC = () => {
    //tipo
    interface Growdever {
        name: string;
        email: string;
        phone: string;
    }

    //estados
    const [growdevers, setGrowdevers] = useState<Growdever[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    //localStorage
    const saveLocal = (paramsGrowdevers:Growdever[])=>{
        localStorage.setItem("DBgrowdevers", JSON.stringify(paramsGrowdevers));
    }
    const loadLocal = () => {
        const db =  localStorage.getItem("DBgrowdevers");
        return db !== null ? JSON.parse(db) : [];
    }

    const handleGrowdevers = () => {
        setGrowdevers(loadLocal)
    }

    //handle
    const handleGrowdever = () => {

        if(name != "" ){ //validação
            
            let growdever : Growdever = {name, email, phone} // monto o objeto
            growdevers.push(growdever); // coloco o objeto dentro do vetor [{nome, email, telefone}]
            setGrowdevers(growdevers); // mudo o estado do vetor

            saveLocal(growdevers); // mudo o estado do vetor)

            setName("");
            setEmail("");
            setPhone("");

        }else{
            alert("Preencha os dados")
        }

    }

    useEffect(() => {handleGrowdevers();}, []);

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
                                    <TextField 
                                        label='Nome' 
                                        value={name} 
                                        onChange={e=>setName(e.target.value)}
                                    />
                                    <TextField 
                                        label='Email' 
                                        value={email} 
                                        onChange={e=>setEmail(e.target.value)} 
                                        type="email"
                                    />
                                    <TextField 
                                        label='Telefone' 
                                        value={phone} 
                                        onChange={e=>setPhone(e.target.value)} 
                                        type="tel"
                                    />
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
                                    <TableCell>Telefone</TableCell>    
                                    <TableCell>Action</TableCell>
                                </TableRow>                             
                            </TableHead>
                            <TableBody>
                                {growdevers.map((element, index) =>(
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
            </Grid>
        </>
    );
};

export default MuiHooks;
