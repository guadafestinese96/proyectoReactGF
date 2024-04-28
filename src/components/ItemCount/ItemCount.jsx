import "./ItemCount.css";

export default function ItemCount({stock, count, increment, decrement}){

    
    return(
        <div className="contenedorGeneralContador">
           <div className="contenedorContador">
             <button className="botonContador" onClick={decrement}>-</button>
             <span className="botonContador">{count}</span>
             <button className="botonContador" onClick={increment} disabled= {count >=stock}>+</button> 
           </div>
        </div>
    )
}

//Si disabled es true se desabilita el boton