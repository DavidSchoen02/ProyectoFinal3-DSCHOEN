import { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, CardActions, Grid, styled, Typography } from '@mui/material';
import { contexto } from './CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonSmall = styled(Button)({
    borderRadius: "100px",
    height: "30px"
});

function ItemCount({ initial, stock, onAdd, product }) {

    const [contador, setContador] = useState(initial);
    const resultado = useContext(contexto);
    const agregarAlCarrito = resultado.agregarAlCarrito;

    function restar() {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    function sumar() {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    function confirmarContador() {
        onAdd(contador);
        if (contador === 0) {
            return;
        } else {
            agregarAlCarrito(product, contador);
            notificacion();
        }
    }

    function notificacion() {
        toast('¡Producto agregado!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    return (
        <>
            <CardActions sx={{ justifyContent: "center" }} >
                <Grid container justifyContent="center">
                    <ButtonSmall variant="contained" onClick={restar}><RemoveIcon></RemoveIcon></ButtonSmall>
                    <Typography ml={1} mr={1} textAlign="center">{contador}</Typography>
                    <ButtonSmall variant="contained" onClick={sumar}><AddIcon></AddIcon></ButtonSmall>
                </Grid>
            </CardActions>
            <Grid container justifyContent="center">
                <Button variant="contained" sx={{ marginTop: "1.5rem" }} onClick={confirmarContador}>Agregar al Carrito</Button>
            </Grid>
        </>
    )

}

export default ItemCount;