import useCount from "../hooks/useCount";
import ItemCount from "./ItemCount/ItemCount";

function ItemListContainer({greating}){
    const {count, decremet, increment} = useCount(0);
    
    return(
        <div>
            <h1>{greating}</h1>
            <ItemCount count= {count} decrement={decremet} increment={increment} stock={3}/>
        </div>
    )
}

export default ItemListContainer;