# Entrega de proyecto final - React-Coderhouse

## Vista previa: 

![GIF](https://user-images.githubusercontent.com/95322998/180665872-43404220-6d31-434e-af0f-47a2fdf5e3c6.gif)

Link ==> https://proyecto-final3-dschoen.vercel.app/

## Uso e instalación:
1. Clonar proyecto desde https://github.com/DavidSchoen02/ProyectoFinal3-DSCHOEN.git

2. Ejecutar npm install .

3. Ejectutar npm start .


## Generalidades

Estado loading = true siempre retorna render de loader (Cargando).

Estado error = true siempre retorna pantalla de error al obtener datos (Error).

En el archivo firebase.js se encuentra la configuración para acceder a la base de datos de Firestore. Recibe las keys para acceder  Firebase desde archivo .env , el mismo esta incluido en el repositorio del proyecto para facilitar la corrección del proyecto.

Carrito de compras persiste su contenido de forma local.


# Librerías
### `Material UI: `
Se implementa para faciltar maquetación del sitio. Se utiliza principalmente para lograr crear componentes responsive y el navbar con su sidebar desplegable.


### `Material icons: `
Se utiliza para traer los svg que estan dentro de los botones.



### `Emotion: `
Se utiliza en conjunto con MUI para dar estilos al sitio.


### `Firebase: `
Se utilizan funciones y métodos de la librería para hacer consultas y peticiones a la base de datos creada en Firestore.


### `React router: `
 Se aplica para crear navegación a través de rutas dentro del sitio. Las rutas están declaradas dentro de los componentes Route nesteados dentro del componente App.

### `React toastify: `
Se usa para desplegar alert cuando un producto es agregado al carrito.

# Componentes

## App:
Componente padre de toda la aplicación, desde App se renderizan todos los componentes nesteados dentro de este. En el se encuentran las rutas disponibles para navegar en el sitio y el contexto del carrito de compras (CartContext).

`ThemeProvider:` Se usa este componente proveniente de MUI para dar estilos al sitio de forma general, aplicando el patron provider.

`ToastContainer:` Componente proveniente de React toastify, se usa para que la aplicacion sea capas de desplegar notificaciones en forma de toast.

 ## NavBar:
Muestra logo del sitio, botón de carrito (CartWidget) y botón de hamburguesa, este ultimo al ser clickeado desplega sidebar.

`drawerWidth:` Define el ancho que tendrá al sidebar.

`AppBar:` Es el header del sitio, contiene Logo del sitio, icono de carrito de compras (CartWidget)y boton de hamburguesa.

`Drawer:` Es el sidebar del sitio, contiene el menú de de navegación y se despliega al clickear boton de hamburguesa.

## CartWidget:
Es el ícono de carrito que se encuentra en el navbar, funciona como link a la ruta "./cart". Utiliza el estado "cantidadItems" proveniente del contexto del carrito (CartContext) para conseguir la cantidad de articulos añadidos al carrito. Al renderizar el componente valida la cantidad articulos en el carrito, si es mayor a 0 muestra la cantidad de articulos y cambia el color del icono.

## CartContext:
Componente que se comporta como provider, aporta a la aplicacion estados sobre informacion del carrito y la logica para agregar y eliminar productos a este. 
Permite a la aplicacion persistir informacion del carrito de forma local.

## Carrito: 
Componente que recibe métodos provenientes de CartContext. Al renderizarse evalua contenido del carrito, si este no esta vacio, muestra el contenido del mismo a traves de tablas y muestra formulario (Form) para llenar datos de la orden de compra. Si el carrito esta vacio muestra texto informadolo.

 ## ItemListContainer:
 En el se hace consulta a Firestore para conseguir lista de productos y filtrarlos según la categoría en la que se este, de no haber ninguna categoría seleccionada se mostraran todos los productos ordenados por categorías.

Se utiliza switch para setear estado “categoriaTraducida” para mostrar en pantalla el nombre de la categoría en español, ya que desde la base de datos la misma llega originalmente en ingles.

Renderiza al componente ItemList y le pasa los 	productos obtenidos de la base de datos mediante props.

 ## ItemList:
 Recibe la lista de productos como prop a través de ItemListContainer  y retorna cards (Item) con cada uno de ellos.

 ## Item:
 Renderiza las cards donde se muestran productos. El botón “Ver detalle” funciona como link a la ruta “/detail/(id del producto seleccionado), lo cual renderiza el componente ItemDetailContainer” .

 ## ItemDetailContainer:
 Hace consulta a la base de datos para traer información de un producto puntual basándose en su id, el cual se obtiene mediante el hook UseParams. Retorna componente ItemDetail.

## ItemDetail:
Muestra información del producto seleccionado que llega via props. Al hacer el render hace validación acerca de si el producto mostrado ya se encuentra añadido al carrito, en el caso de ya estar en el carrito se muestra botón para “Agregar al carrito”pero en estado disabled, si el producto no esta en el carrito se muestra componente ItemCount.

## ItemCount:
Muestra los botones para seleccionar la cantidad de unidades a añadir del producto al carrito, esta siendo limitada por el stock disponible del producto, también muestra el botón “Agregar al carrito”.
Al agregar producto al carrito, se despliega alert a traves de toast, utilizando la libreria react toastify.

## Cargando:
Componente que renderiza loader de carga.

## Error:
Componente que renderiza pantalla de error.

## Tracking:
Componente que permite filtrar ordenes de compra generadas a traves de su numero de Id, busca en la base de datos en Firestore y si encuentra resultados los muestra en pantalla en forma de tabla (TablaPedido).

## TablaPedido:
Renderiza tabla con los datos de la orden de compra encontrada en la busqueda que se efectua en el componente Tracking y lo pasa como prop al componente tabla.

## Tabla:
Componente que renderiza tabla y recibe 2 parametros:

`productos:`  es la informacion que se vera de los productos a mostrar (Producto, Cantidad, Precio).

`precioFinal:` el valor debe ser el precio total los productos a mostrar.

## Form:
Renderiza un formulario controlado a través de estados. Los datos ingresados forman parte de la orden de compra que se sube a Firestore para conservar los datos del cliente.





