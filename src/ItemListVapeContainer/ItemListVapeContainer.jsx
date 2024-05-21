import ItemListVape from "./ItemListVape"
import "./ItemListVapeContainer.css"
import useVapes from "../hooks/useVapes";


export default function ItemListVapeContainer() {
    const {vapes, isLoading} = useVapes();
    
     if (isLoading) return <h1>Cargando...</h1>

    return (
        <div className="centro">
            <h1>VAPES</h1>
            <ItemListVape vapes={vapes} /> 
            
        </div>
    )
}
