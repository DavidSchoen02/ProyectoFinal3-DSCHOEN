
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Grid, Typography } from '@mui/material';
import Cargando from './Cargando';
import { useParams } from 'react-router-dom';
import { productosDb } from '../utilities/firebase';
import { getDocs, query, where } from 'firebase/firestore';
import Error from './Error';


function ItemsListContainer() {
    const [items, setItems] = useState([])
    const { categoria } = useParams();
    const [categoriaTraducida, setCategoriaTraducida] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        let productosFiltrados;
        let consulta;

        switch (categoria) {
            case "Amplifiers":
                setCategoriaTraducida("Amplificadores");
                break;
            case "Guitars":
                setCategoriaTraducida("Guitarras");
                break;
            case "Basses":
                setCategoriaTraducida("Bajos");
                break;
            case "Drums":
                setCategoriaTraducida("Baterías");
                break;
            case "Pedals":
                setCategoriaTraducida("Pedales");
                break;
            case "Consoles":
                setCategoriaTraducida("Consolas");
                break;
            case "Mics":
                setCategoriaTraducida("Micrófonos");
                break;
            case "Keyboards":
                setCategoriaTraducida("Teclados");
                break;
            default:
                setCategoriaTraducida("Todos los productos");
        }

        if (categoria === undefined) {
            consulta = getDocs(productosDb);
        } else {
            productosFiltrados = query(productosDb, where("category", "==", categoria));
            consulta = getDocs(productosFiltrados);
        }

        setLoading(true);

        consulta
            .then(res => {
                const productosExtraidos = res.docs.map(e => e.data());
                if (categoria === undefined) { productosExtraidos.sort((a, b) => a.category > b.category); }
                setItems(productosExtraidos);
                setLoading(false);

            })
            .catch(err => {
                if(err){setError(true)}
            });
    }, [categoria]);


    if (loading) {
        return <Cargando/>

    } else if (error) {
        return (
            <Error/>
        )
    } else {
        return (
            <Grid container justifyContent="center" spacing={2}>
                <Typography variant="h2" width="100%" textAlign="center" fontFamily={'Oxygen'}>{categoriaTraducida}</Typography>
                <ItemList productos={items}></ItemList>
            </Grid>
        );

    }

}



export default ItemsListContainer;