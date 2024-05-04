import usePerfume from "../../hooks/usePerfume";
import Item from "../ItemList/Item";

export default function ItemDetailContainer(id){
    id=4;
    const {perfume, isLoading} = usePerfume(id);
    console.log(perfume);

    if (isLoading) return <h1>Cargando...</h1>

    return(
        <div>
            <h1>item</h1>
            <Item item={perfume}/>
        </div>    
        )
}