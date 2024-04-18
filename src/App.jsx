import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import Brand from './components/Brand'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <div className='headerClass'>
        <Brand/>
        <NavBar/>
      </div>
    <ItemListContainer greating="Hola"/>
    </div>
  )
}

export default App
