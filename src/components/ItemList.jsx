import Item from "./Item";


function ItemList({productos}){

    const articulos =productos.map(producto => {
        return(<Item key={producto.id} id={producto.id} brand= {producto.brand} title= {producto.title} price= {producto.price} pictureUrl= {producto.pictureUrl} initial={producto.initial}/>);
      });

    return articulos;

}

export default ItemList;