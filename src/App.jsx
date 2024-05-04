import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Item from './components/ItemList/Item'


function App() {
  return (
   
    <BrowserRouter> 
    <Layout>
    {/* <ItemListContainer greating="WIDISTOREOK"/> */}
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>         
       <Route path="/marcas" element={<ItemDetailContainer/>} />
       <Route path="/filtrar" element={<ItemDetailContainer/>} />
       <Route path="/carrito" element={<h1>CARRITO</h1>} />
       <Route path="/perfumes/*" element={<h1>NOT FOUND</h1>} />
    </Routes>
    
    </Layout>
    </BrowserRouter>
  )
}

export default App;



    
    