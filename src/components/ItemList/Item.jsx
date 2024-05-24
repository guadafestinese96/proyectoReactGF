import { NavLink } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import CartContext from "../contexts/CartContext/CartContext";
import { useContext } from "react";


export default function Item({ item }) {
  const { count, increment, decrement, reset } = useCount(0);
  
  const {addToCart, cart} = useContext(CartContext);

  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };

  const handleAddToCart= ()=>{
    onAdd(item,count)
    Swal.fire({
      title: "Agregado al carrito",
      icon: "success",
    })
    addToCart(item, count);
    reset();
  }



  return (
    <div className="itemContainerIndex">
      <NavLink to={`/item/${item.id}`}>
        <p className="clickToBuy">COMPRAR</p>
      <div className="itemImgContainer">
        <img className="itemImg" src={`../../src/Perfumes/${item.image}`} alt={item.nombre} />
      </div>
      </NavLink>
      <h2 className="itemMarca">{item.marca}</h2>
      <p className="itemNombre">{item.nombre}</p>
      <p className="itemGenero">{item.genero}</p>
      <p className="itemPrecio">${item.precio}</p>

    </div>
  );
}