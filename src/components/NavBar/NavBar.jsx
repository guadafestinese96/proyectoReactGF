//Combinacion de card widget y category list

import CategoryList from "../CategoryList/CategoryList";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { useContext } from "react";
import CartContext from "../contexts/CartContext/CartContext";

function NavBar(){
    const {cart} = useContext(CartContext)
    
    return(
        <div className="navBarClass">
            <CategoryList/>
            <CartWidget/>
        </div>
    )
}

export default NavBar;