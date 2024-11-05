import Item from "./Item"
import './Item.css'

export default function ItemList({ perfumes }) {
    return (
        <div className="contenedorPerfumes">
            {perfumes.map((unPerfume) => (
                <Item key={unPerfume.id} item={unPerfume} />
            ))}
        </div>
    )
}

