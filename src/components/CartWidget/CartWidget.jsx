import { useContext, useState } from "react";
import CartIcon from "../CartIcon/CartIcon";
import './CartWidget.css'
import { NavLink } from "react-router-dom";
import CartContext from "../contexts/CartContext/CartContext";

function CartWidget() {

    const {cart} = useContext(CartContext);
    const cantidadCarrito = cart.reduce((acc,item) => acc + item.quanqtity, 0);
    
    return (
        <NavLink to={"/seccion/carrito"}>
        <div className="cartIconClass">
            <CartIcon ancho={30} alto={40} />
            <span>{cantidadCarrito}</span>
        </div>
        </NavLink>

    )
}
export default CartWidget;

