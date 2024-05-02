import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Perfu from './components/Perfu/Perfu'

function App() {
  return (

    <BrowserRouter>
    <Layout>
    <ItemListContainer greating="WIDISTOREOK"/>
     <Routes>
      <Route path="/" element={<h1>WIDISTOREOK</h1>} />
       <Route path="/fraganciasHombre" element={<h1>HOMBRE</h1>} />
       <Route path="/fraganciasMujer" element={<h1>MUJER</h1>} />
       <Route path="/fraganciasMujer/:perfuId" element={<Perfu />} />
       <Route path="/carrito" element={<h1>CARRITO</h1>} />
       <Route path="/perfumes/*" element={<h1>NOT FOUND</h1>} />
    </Routes>
    
    </Layout>
    </BrowserRouter>
  )
}

export default App;



    
    