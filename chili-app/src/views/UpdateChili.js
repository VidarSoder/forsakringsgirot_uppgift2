import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Container, Typography, Grid, Box, Card, CardContent, CardMedia } from '@material-ui/core';

const chiliImages = [
    'https://cdn.shopify.com/s/files/1/2182/2603/files/redchilipepper.jpg?v=1669750479',
    'https://i.redd.it/sc765watwjo51.jpg',
    'https://i.ebayimg.com/images/g/FU8AAOSwjntg8tyi/s-l1600.jpg'
]

function UpdateChili() {
    const [chilis, setChilis] = useState([]);
    const [selectedChili, setSelectedChili] = useState('');
    const [quantity, setQuantity] = useState('');

    const fetchChilis = async () => {
        const res = await axios.get('http://localhost:8080/chilis');
        setChilis(res.data);
    };

    useEffect(() => {
        fetchChilis();
    }, []);

    const updateChili = async () => {
        if (!selectedChili || !quantity) {
            alert('Please select a chili and enter a quantity');
            return;
        }
        try {
            await axios.post(`http://localhost:8080/chilis/${selectedChili}/${quantity}`);
        } catch (err) {
            console.error(err);
            alert('Error fetching data');
        }
        fetchChilis();
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Update Chili</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="chili-label">Chili</InputLabel>
                        <Select
                            labelId="chili-label"
                            id="chili"
                            value={selectedChili}
                            onChange={e => setSelectedChili(e.target.value)}
                        >
                            {chilis.map(chili => (
                                <MenuItem key={chili.id} value={chili.id}>{chili.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Quantity"
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={updateChili}>Update Chili</Button>
            </Box>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>Current Inventory</Typography>
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
            </Box>
        </Container>
    );
}

export default UpdateChili;