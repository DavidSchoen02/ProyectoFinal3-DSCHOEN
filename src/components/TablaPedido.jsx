import Tabla from "./Tabla";
import './Tabla.css';


const tablaProductos = (array) => {
    const pedido = array[0].carrito;

    const tabla = pedido.map(producto =>
        <tr key={producto.id}>
            <td>{producto.brand} {producto.name}</td>
            <td>{producto.quantity}</td>
            <td>{producto.price} USD</td>
            <td></td>
        </tr>
    );
    return tabla

}

const precioTotal = (array) => {
    const pedido = array[0].carrito;
    let total = 0;
    pedido.forEach(e => {
        total += (e.price * e.quantity);
    });
    return total;
}

export default function TablaPedido({ array }) {

    return (
        <Tabla productos={tablaProductos(array)} precioFinal={precioTotal(array)}></Tabla>
    )
}
