import { useContext } from "react"
import CartContext from "../contexts/CartContext/CartContext"
import CartItem from "./CartItem";
import "./CartContainer.css"
import { NavLink } from "react-router-dom";

export default function CartContainer(){
    
    const {cart, clearCart, cartTotal} = useContext(CartContext);
    console.log(cart.length);
    return(
        <div className="cartContainer">
            <h1>CARRITO</h1>
            {cart.length === 0 ? (
                <div>
            <h2 className="clearCartText">Aún no hay productos en el carrito</h2>
            <NavLink to="/seccion/inicio">
            <button className="clearCart">COMPRAR</button>
            </NavLink>
            </div>
            ):(
                cart.map((item)=>{
                return <CartItem key={item.product.id} item={item} />;
            }))
            }
            <div className={`${cart.length === 0 ? "hidden" : ""}`}>
            <h3>Total $ {cartTotal}</h3>
            <button className="clearCart" onClick={clearCart}>Limpiar Carrito</button>
            <NavLink to="/seccion/checkout">
            <button className="clearCart" >Terminar Compra</button>
            </NavLink>
            </div>
        </div>
    )
}