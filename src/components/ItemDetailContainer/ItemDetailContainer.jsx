import usePerfume from "../../hooks/usePerfume";
import Item from "../ItemList/Item";

export default function ItemDetailContainer(idParams){
    const {perfume, isLoading} = usePerfume(idParams);

    if (isLoading) return <h1>Cargando...</h1>

    return(
        <div>
            <h1>item</h1>
            <h1>{perfume.nombre}</h1>
           
        </div>    
        )
}