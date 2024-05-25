import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './components/contexts/CartContext/CartProvider'
import CartContainer from './components/CartContainer/CartContainer'
import CheckOutContainer from './components/CheckOutContainer/CheckOutContainer'


function App() {

  return (
   
    <BrowserRouter> 
    <CartProvider>
    <Layout>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>         
      <Route path="/seccion/:id" element={<ItemListContainer/>}/>  
      <Route path="/item/:id" element={<ItemDetailContainer/>} />      
      <Route path="/seccion/marcas/:idMarca" element={<ItemListContainer/>} />
      <Route path="/seccion/carrito" element={<CartContainer/>} />
      <Route path="/seccion/checkout" element={<CheckOutContainer/>} />
      <Route path="/secciones/*" element={<h1>NOT FOUND</h1>} />
    </Routes>    
    </Layout>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App;



    
    