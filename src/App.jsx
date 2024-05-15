import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemListVapeContainer from './ItemListVapeContainer/ItemListVapeContainer'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FilterContainer from "./components/FilterContainer/FilterContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContext from './components/contexts/CartContext/CartContext'
import CartProvider from './components/contexts/CartContext/CartProvider'


function App() {
  return (
   
    <BrowserRouter> 
    <CartProvider>
    <Layout>
    {/* <ItemListContainer greating="WIDISTOREOK"/> */}
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>         
      <Route path="/seccion/:id" element={<ItemListContainer/>}/> 
      <Route path="/seccion/filtrar" element={<FilterContainer/>} />   
      <Route path="/item/:id" element={<ItemDetailContainer/>} />      
      <Route path="/seccion/marcas/:idMarca" element={<ItemListContainer/>} />
      <Route path="/seccion/vapes" element={<ItemListVapeContainer />} />
      <Route path="/seccion/carrito" element={<h1>CARRITO</h1>} />
      <Route path="/secciones/*" element={<h1>NOT FOUND</h1>} />
    </Routes>
    
    </Layout>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App;



    
    