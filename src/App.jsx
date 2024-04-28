import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import Brand from './components/Brand'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Layout>
      <ItemListContainer greating="Hola WidiFollowers"/>
    </Layout>
  )
}

export default App;


