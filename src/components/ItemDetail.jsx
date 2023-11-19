import * as React from 'react';
import { CardMedia, Typography, Grid, Button } from '@mui/material/';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { contexto } from './CartContext';


function ItemDetail({ product }) {

    const resultado = useContext(contexto);
    const evitarRepetidos = resultado.evitarRepetidos;
    const [cantidad, setCantidad] = useState();


    const onAdd = (valorContador) => {
        setCantidad(valorContador);
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item md={4} justifyContent="center">
                <CardMedia
                    component="img"
                    image={product.pictureUrl}
                    alt={product.id} />
            </Grid>

            <Grid item md={6} sm={10} flexDirection="column" justifyContent="center">
                <Typography variant="h3" textAlign="center">{product.brand} {product.title}</Typography>
                <Typography variant="h4" textAlign="center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta commodi, suscipit quasi deleniti necessitatibus repellat </Typography>
                <Typography variant="h5" textAlign="center">{product.price} Usd</Typography>
                <Grid container justifyContent="center">
                    {evitarRepetidos(product) ?
                        <Button variant='disabled'>Agregar al carrito</Button> :
                        <ItemCount initial={0} stock={product.stock} onAdd={onAdd} product={product} quantity={cantidad} ></ItemCount>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
    
}


export default ItemDetail;