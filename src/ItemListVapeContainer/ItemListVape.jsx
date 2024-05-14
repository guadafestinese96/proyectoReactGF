
import ItemVape from "./ItemVape"
import "./ItemListVapeContainer.css"

export default function ItemList({ vapes }) {
    return (
        <div className="contenedorVapes">
            {vapes.map((unVape) => (
                <ItemVape key={unVape.id} item={unVape} />
            ))}
        </div>
    )
}

