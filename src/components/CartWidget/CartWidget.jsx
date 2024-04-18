import { useState } from "react";
import CartIcon from "../CartIcon/CartIcon";
import './CartWidget.css'

function CartWidget(){

    const [cartItems, setCartItems] = useState(3);
    return(
        <div className="cartIconClass">
            <CartIcon ancho={30} alto={40}/>
            <span>{cartItems}</span>
        </div>
    )
}
export default CartWidget;
