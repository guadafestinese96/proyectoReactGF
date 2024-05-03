import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import usePerfumes from "../../hooks/usePerfumes";

function ItemListContainer({ greating }) {
    const {perfumes, isLoading} = usePerfumes();

     if (isLoading) return <h1>Cargando...</h1>

    return (
        <div className="centro">
            <h1>{greating}</h1>
            <ItemList perfumes={perfumes} /> 
            
        </div>
    )
}

export default ItemListContainer;