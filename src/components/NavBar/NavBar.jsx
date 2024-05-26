import CategoryList from "../CategoryList/CategoryList";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

function NavBar(){
    
    return(
        <div className="navBarClass">
            <CategoryList/>
            <CartWidget/>
        </div>
    )
}

export default NavBar;