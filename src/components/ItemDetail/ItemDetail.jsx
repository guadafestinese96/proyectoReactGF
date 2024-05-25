import { NavLink } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import CartContext from "../contexts/CartContext/CartContext";
import { useContext } from "react";


export default function ItemDetail({ item }) {
  const { count, increment, decrement, reset } = useCount(0);

  const {addToCart} = useContext(CartContext);

  const handleAddToCart= ()=>{
    Swal.fire({
      title: "Agregado al carrito",
      icon: "success",
    })
    addToCart(item, count);
    item.stock = item.stock - count;
    reset();
  }


  return (
    <div className="itemContainer">
      <NavLink to={`/item/${item.id}`}>
      <div className="itemImgContainer">
        <img className="itemImg" src={item.image} alt={item.nombre} />
      </div>
      </NavLink>
      <h2 className="itemMarca">{item.marca}</h2>
      <p className="itemNombre">{item.nombre}</p>
      <p className="itemGenero">{item.genero}</p>
      <p className="itemPrecio">${item.precio}</p>
      
      <div className="contenedorContador">
        <ItemCount
          stock={item.stock}
          count={count}
          increment={increment}
          decrement={decrement} 
        />
      </div>
      
      <div className="itemCartContainer">
        <button
          className="itemCartButton"
           onClick={() => {
             handleAddToCart()
             Swal.fire({
               title: "Agregado al carrito",
               icon: "success",
           })
           }}
          disabled={count === 0} 
        >
          Agregar Al Carrito
        </button>
      </div>
      <p className="disponibles">
        Quedan <strong>{item.stock - count}</strong> unidades disponibles
      </p>
    </div>
  );
}