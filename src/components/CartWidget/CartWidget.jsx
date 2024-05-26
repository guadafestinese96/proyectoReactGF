import { useContext } from "react";
import CartIcon from "../CartIcon/CartIcon";
import './CartWidget.css'
import { NavLink } from "react-router-dom";
import CartContext from "../contexts/CartContext/CartContext";

export default function CartWidget() {

    const {cart} = useContext(CartContext);
    //const cantidadCarrito = cart.reduce((acc,item) => acc + item.quantity, 0);
    const cantidadProductos = cart.length;
    console.log(cantidadProductos);
    
    return (
        <NavLink to={"/seccion/carrito"}>
        <div className="cartIconClass">
            <CartIcon ancho={30} alto={40} />
            <span>{cantidadProductos}</span>
        </div>
        </NavLink>

    )
}

