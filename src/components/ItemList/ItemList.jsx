import Item from "./Item"
import "./Item.css"

export default function ItemList({ perfu }) {
    return (
        <div className="contenedorPerfumes">
            {perfu.map((unPerfume) => (
                <Item key={unPerfume.id} item={unPerfume} />
            ))}
        </div>
    )
}

