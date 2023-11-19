import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { CartContext } from './components/CartContext';
import Tracking from './components/Tracking';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4f1d0c",
    },
    secondary: {
      main: "#693D2F",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <ThemeProvider theme={theme}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemsListContainer />} />
            <Route path='/category/:categoria' element={<ItemsListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:categoria/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Carrito />} />
            <Route path='/tracking' element={<Tracking />} />
            <Route path='/tracking/:id' element={<Tracking />} />
          </Routes>
        </ThemeProvider>
      </CartContext>
      <ToastContainer
        toastStyle={{
          color: "white",
          backgroundColor: "#004225"
        }} />
    </BrowserRouter>
  );
}


export default App;
