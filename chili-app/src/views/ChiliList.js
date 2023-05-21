import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Container, Button, CardMedia } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { chiliImages } from '../data/images.js'

function ChiliList() {
    const [chilis, setChilis] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchChilis = async () => {
            const res = await axios.get('http://localhost:8080/chilis');
            setChilis(res.data);
        };
        fetchChilis();
    }, []);

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={() => navigate("/login")}>Log In</Button>
            <Grid container spacing={3} justifyContent="center">
                {chilis.map((chili, i) => (
                    <Grid item xs={12} sm={6} md={4} key={chili.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={chiliImages[i]}
                                title="Contemplative Reptile"
                            />
                            <CardContent>

                                <Typography variant="h5" component="h2">{chili.name}</Typography>
                                <Typography color="textSecondary">{chili.origin}</Typography>
                                <Typography>Scoville: {chili.scoville}</Typography>
                                <Typography>Price: {chili.price}</Typography>
                                <Typography>Quantity: {chili.quantity}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ChiliList;

