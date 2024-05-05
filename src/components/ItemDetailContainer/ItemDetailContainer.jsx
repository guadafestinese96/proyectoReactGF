import usePerfume from "../../hooks/usePerfume";
import Item from "../ItemList/Item";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer(){

    const {idParams} = useParams();
    const {perfume, isLoading} = usePerfume(idParams);

    if (isLoading) return <h1>Cargando...</h1>


    if(!perfume){
        return <h1>ID DE PERFUME INEXISTENTE</h1>
    }else{
        return(
        <div>
            <h1>item</h1>
            <Item item={perfume}/>
        </div>    
    )
    }
 
}