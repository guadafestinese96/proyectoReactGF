import { useState } from "react";
import CartIcon from "../CartIcon/CartIcon";
import './CartWidget.css'
import { NavLink } from "react-router-dom";

function CartWidget() {

    const [cartItems, setCartItems] = useState(3);
    return (
        <NavLink to={"/carrito"}>
        <div className="cartIconClass">
            <CartIcon ancho={30} alto={40} />
            <span>{cartItems}</span>
        </div>
        </NavLink>

    )
}
export default CartWidget;

