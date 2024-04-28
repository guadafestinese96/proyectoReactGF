import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { getPerfumes } from "../mock/asyncMock";

const arrayPerfu= [
    {id: 34, marca: "Armani", nombre: "MyWay", precio: 26000, stock: 3}
]

function ItemListContainer({ greating }) {
    const [perfumes, setPerfumes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPerfumes()
            .then((data) => setPerfumes(data))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return <h1>Cargando...</h1>
    return (
        <div className="centro">
            <h1>{greating}</h1>
            <ItemList perfumes={perfumes} />
        </div>
    )
}

export default ItemListContainer;