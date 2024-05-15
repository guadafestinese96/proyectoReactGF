import { NavLink } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import CartContext from "../contexts/CartContext/CartContext";
import { useContext } from "react";


export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);
  
  /*const {addToCart} = useContext(CartContext);

  const handleAddToCart= ()=>{
    Swal.fire({
      title: "Agregado al carrito",
      icon: "success",
    })
    console.log(addToCart(item, count));
    
    reset();
  }
*/
  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };

  return (
    <div className="itemContainer">
      <NavLink to={`/item/${item.id}`}>
      <div className="itemImgContainer">
        <img className="itemImg" src={`../../src/Perfumes/${item.image}`} alt={item.nombre} />
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
             onAdd(item, count)
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