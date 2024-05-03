import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Perfu from './components/Perfu/Perfu'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
   
    <BrowserRouter> 
    <Layout>
    {/* <ItemListContainer greating="WIDISTOREOK"/> */}
    {/* <ItemDetailContainer/> */}
   
     <Routes>
      <Route path="/" Component={ItemListContainer}/>
      <Route path="/category/:genero" component={ItemDetailContainer} />          
       <Route path="/category/fraganciasMujer/:perfuId" element={<Perfu />} />
       <Route path="/carrito" element={<h1>CARRITO</h1>} />
       <Route path="/perfumes/*" element={<h1>NOT FOUND</h1>} />
    </Routes>
    
    </Layout>
    </BrowserRouter>
  )
}

export default App;



    
    