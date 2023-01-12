import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Growdever from '../../types/growdevers';

const Form: React.FC = () => {
    //estados
    const [growdevers, setGrowdevers] = useState<Growdever[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    //localStorage
    const saveLocal = (paramsGrowdevers: Growdever[]) => {
        localStorage.setItem("DBgrowdevers", JSON.stringify(paramsGrowdevers));
    }
    const loadLocal = () => {
        const db = localStorage.getItem("DBgrowdevers");
        return db !== null ? JSON.parse(db) : [];
    }

    const handleGrowdevers = () => {
        setGrowdevers(loadLocal)
    }

    useEffect(() => { handleGrowdevers(); }, []);

    //handle
    const handleGrowdever = () => {

        if (name != "" || email != "" || phone != "") { //validação

            let growdever: Growdever = { name, email, phone } // monto o objeto
            growdevers.push(growdever); // coloco o objeto dentro do vetor [{nome, email, telefone}]
            setGrowdevers(growdevers); // mudo o estado do vetor

            saveLocal(growdevers); // pego o vetor e salvo no localStorage

            setName("");
            setEmail("");
            setPhone("");

        } else {
            alert("Preencha os dados")
        }

    }

    return (
        <React.Fragment>
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
                                    onChange={e => setName(e.target.value)}
                                />
                                <TextField
                                    label='Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                />
                                <TextField
                                    label='Telefone'
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
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
        </React.Fragment>
    );
};

export default Form;
