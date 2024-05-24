import { useContext } from "react"
import CartContext from "../contexts/CartContext/CartContext"
import "./CartItem.css"

export default function CartItem({item}){
    const {removeFromCart, addToCart} = useContext(CartContext);

    return(
        <div key={item} className="itemCart">
            <img className="itemImgCart" src={`../../src/Perfumes/${item.product.image}`} alt={item.nombre} />
            <div className="detalleItem">
            <p className="fraganceName">{item.product.nombre}</p>
            <p>{item.product.genero}</p>
            <p>Precio: {item.product.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <button className="buttonRemove" onClick={() => removeFromCart(item.product.id, 1)}>
                -
            </button>
            
            <button
          className="buttonAdd"
          onClick={() => addToCart(item.product, 1)}
        >
          +
        </button>
        
        </div>
            
        </div>
    )
}