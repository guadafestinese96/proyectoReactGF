import useCount from "../hooks/useCount";
import ItemCount from "./ItemCount/ItemCount";
import Item from "./ItemList/Item";

function ItemListContainer({ greating }) {
    const { count, decrement, increment } = useCount(0);

    return (
        <div>
            <h1>{greating}</h1>
            {/* <ItemCount count={count} decrement={decrement} increment={increment} stock={3}/> */}
            <Item item={{
                id: 3,
                marca: "Paco Rabanne",
                nombre: "One Million",
                precio: 26000,
                stock: 2,
                image: "../src/Perfumes/oneMillion.jpg"
            }} />
        </div>
    )
}

export default ItemListContainer;