import { Grid } from "@mui/material";

export default function Tabla({ productos, precioFinal }) {

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{precioFinal} USD</td>
                        </tr>
                    </tbody>
                </table>

            </Grid>

        </Grid>
    )
}