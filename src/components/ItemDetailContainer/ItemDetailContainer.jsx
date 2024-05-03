import ItemList from "../ItemList/ItemList";
import usePerfumeGenero from "../../hooks/usePerfumeGenero";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { genero } = useParams(); // Obtener el parámetro genero de la URL
    const { perfumesGenero, isLoading } = usePerfumeGenero(genero); // Usar el hook con el genero obtenido

    if (isLoading) return <h1>Cargando perfumes...</h1>;

    return (
        <div className="centro">
            <h1>Perfumes de {genero}</h1>
            <ItemList perfumes={perfumesGenero} /> 
        </div>
    );
}

export default ItemDetailContainer;