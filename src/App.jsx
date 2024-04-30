import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
    <Layout>
    <ItemListContainer greating="Hola WidiFollowers"/>
     <Routes>
      <Route exact path="/" element={<h1>Home</h1>} />
       <Route exact path="/fraganciasHombre" element={<h1>Perfumes para Hombre</h1>} />
       <Route exact path="/fraganciasMujer" element={<h1>Perfumes para Mujer</h1>} />
       <Route exact path="/perfumes/*" element={<h1>Not found</h1>} />
    </Routes>
    
    </Layout>
    </BrowserRouter>
  )
}

export default App;



    
    