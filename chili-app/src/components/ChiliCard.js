import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { chiliImages } from '../data/images.js';


export const ChiliCard = (chili, i) => {
    console.log(chili);
    (
        <Card>
            <CardMedia
                component="img"
                alt="tempalt"
                height="140"
                image={chiliImages[i]}
                title="chilipic"
            />
            <CardContent>

                <Typography variant="h5" component="h2">{chili.name}</Typography>
                <Typography color="textSecondary">{chili.origin}</Typography>
                <Typography>Scoville: {chili.scoville}</Typography>
                <Typography>Price: {chili.price}</Typography>
                <Typography>Quantity: {chili.quantity}</Typography>
            </CardContent>
        </Card>
    )
}
