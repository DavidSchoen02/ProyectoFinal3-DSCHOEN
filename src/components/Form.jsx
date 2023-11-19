import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { contexto } from "./CartContext";
import "./Form.css";


function Form({ handleChange, data, handleSubmit }) {

    const resultado = useContext(contexto);
    const vaciarCarrito = resultado.vaciarCarrito;

    return (
        <Grid container justifyContent="center">
            <Grid item width="60%" mt="20px">
                <form onSubmit={handleSubmit}>
                    <Grid flexDirection="column">
                        <TextField
                            placeholder="Nombre"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            fullWidth={true}
                            required
                        />

                        <TextField
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            fullWidth={true}
                            required
                        />

                        <TextField
                            placeholder="Teléfono"
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            value={data.phone}
                            fullWidth={true}
                            required
                        />

                        <TextField
                            placeholder="Dirección"
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={data.address}
                            fullWidth={true}
                            required
                        />
                    </Grid>


                    <Grid container justifyContent="space-around" spacing={2} mt={2}>

                        <Button variant="outlined" onClick={vaciarCarrito} sx={{mt:"10px"}}>Vaciar carrito</Button>
                        <Button variant="contained"
                            disabled={data.name === "" || data.email === "" || data.phone === "" || data.address === ""}
                            sx={{mt:"10px"}}
                            onClick={handleSubmit}>Finalizar Compra</Button>

                    </Grid>

                </form>
            </Grid>
        </Grid>
    )
}

export default Form;