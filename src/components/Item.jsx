import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Grid } from '@mui/material/';
import { Link } from 'react-router-dom';


function Item({ id, brand, title, price, pictureUrl }) {

    return (
        <Grid item sm={6} md={3} mt={2} mb={2} >
            <Card>
                <CardMedia
                    component="img"
                    image={pictureUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography textAlign="center" fontSize="1.2rem">
                        {brand} {title}
                    </Typography>

                    <Typography ml={1} mr={1} textAlign="center">{price} USD</Typography>
                    <Box display="flex" justifyContent="center" mb={-1}>
                        <Link to={`detail/${id}`} ><Button variant="contained">Ver Detalle</Button></Link>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}


export default Item;