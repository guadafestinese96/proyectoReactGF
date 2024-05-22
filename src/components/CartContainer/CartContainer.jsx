import { useContext } from "react"
import CartContext from "../contexts/CartContext/CartContext"
import CartItem from "./CartItem";

export default function CartContainer(){
    
    const {cart, clearCart, cartTotal} = useContext(CartContext);
    
    return(
        <div>
            <h1>CARRITO</h1>
            {cart.lenght === 0 ? (
            <h2>No hay productos en el carrito</h2>
            ):(
                cart.map((item)=>{
                return <CartItem key={item.product.id} item={item} />;
            }))
            }
            <h3>Total $ {cartTotal}</h3>
            <button className="clearCart" onClick={clearCart}>Limpiar Carrito</button>
        </div>
    )
}