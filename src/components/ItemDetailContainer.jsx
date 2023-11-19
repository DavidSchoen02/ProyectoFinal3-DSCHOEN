import { Grid } from "@mui/material";
import {  doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productosDb } from "../utilities/firebase";
import Cargando from "./Cargando";
import Error from "./Error";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setLoading(true)
        const refProducto = doc(productosDb, id);
        const consulta = getDoc(refProducto);

        consulta
            .then(res => {
                const producto = res.data();
                setProduct(producto);
                setLoading(false);
            })
            .catch(setError(true))
    }, [id]);


    if (loading) {
        return <Cargando/>
    } else {
        return (
            <Grid container justifyContent={"center"}>
                {error ?
                <ItemDetail product={product}></ItemDetail> :
                <Error/>}
            </Grid>
        )
    }

}

export default ItemDetailContainer;