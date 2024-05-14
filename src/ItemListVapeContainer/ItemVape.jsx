import { NavLink } from "react-router-dom";
import useCount from "../hooks/useCount";
import ItemCount from "../components/ItemCount/ItemCount";
import "./ItemListVapeContainer.css";


export default function ItemVape({ item }) {
  const { count, increment, decrement } = useCount(0);
  
  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };

  return (
    <div className="itemVapeContainer">
      <NavLink to={`/item/${item.id}`}>
      <div className="itemImgContainer">
        <img className="itemImgVape" src={`../../src/Vapes/${item.image}`} alt={item.nombre} />
      </div>
      </NavLink>
      <h2 className="itemMarca">{item.marca}</h2>
      <p className="itemNombre">{item.nombre}</p>
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