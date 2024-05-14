import ItemListVape from "./ItemListVape"
import "./ItemListVapeContainer.css"
import useVapes from "../hooks/useVapes";
import { useParams } from "react-router-dom";


export default function ItemListVapeContainer() {
    const {vapes, isLoading} = useVapes();
    
     if (isLoading) return <h1>Cargando...</h1>

    return (
        <div className="centro">
            <h1>WIDISTOREOK</h1>
            <ItemListVape vapes={vapes} /> 
            
        </div>
    )
}
