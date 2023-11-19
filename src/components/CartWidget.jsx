import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import './CartWidget.css'

function CartWidget() {

  const resultado = useContext(contexto);
  const calcularTotal = resultado.calcularTotal
  const cantidadItems = resultado.cantidadItems;

  useEffect(() => {
    calcularTotal(); 
});

  return (
    <Link to="./cart">
      <Button color="secondary" variant="contained" className={cantidadItems > 0 ? "enCarrito" : ""}><ShoppingCartOutlinedIcon fontSize="medium"></ShoppingCartOutlinedIcon> {cantidadItems > 0 ? cantidadItems : ""} </Button>
    </Link>
  );


}

export default CartWidget;