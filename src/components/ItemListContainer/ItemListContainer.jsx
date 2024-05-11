import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import usePerfumes from "../../hooks/usePerfumes";
import { useParams } from "react-router-dom";


function ItemListContainer() {
    const {marca} = useParams();
    const {perfumes, isLoading} = usePerfumes(marca);
    
     if (isLoading) return <h1>Cargando...</h1>

    return (
        <div className="centro">
            <h1>WIDISTOREOK</h1>
            <ItemList perfumes={perfumes} /> 
            
        </div>
    )
}

export default ItemListContainer;