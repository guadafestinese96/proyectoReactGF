import "./CheckOutContainer.css"
import { useContext } from "react";
import CartContext from "../contexts/CartContext/CartContext";
import CartDetails from "../CartDetail/CartDetail";

import {
    addDoc,
    collection,
    doc,
    getDoc,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
import useBuyer from "../../hooks/useBuyer";


export default function CheckOutContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);
    const { buyer, handleInputChange, resetInput } = useBuyer();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            buyer,
            cart,
            cartTotal,
        };

        const db = getFirestore();

        for (const itemInCart of cart) {
            const productRef = doc(db, "perfumes", itemInCart.product.id);
            const product = await getDoc(productRef);
            const productData = product.data();
            if (productData.stock < itemInCart.quantity) {
                alert(`No hay stock suficiente para el producto ${productData.title}`);
                return;
            }
        }

        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then(async ({ id }) => {
            if ((buyer.name === "") || (buyer.email === "") || (buyer.apellido === "")) {
                Swal.fire({
                    title: "Los campos no pueden estar vacíos",
                    icon: "error"
                });
            } else {
                Swal.fire({
                    title: (`Compra realizada con éxito, tu id de orden es: ${id}`),
                    icon: "success",
                })
                clearCart();

                for (const itemInCart of cart) {
                    const productRef = doc(db, "perfumes", itemInCart.product.id);
                    const product = await getDoc(productRef);
                    const productData = product.data();
                    const newStock = productData.stock - itemInCart.quantity;
                    await updateDoc(productRef, { stock: newStock });
                }
            }
        });


    };



    return (
        <div className="checkoutContainer">
            <form onSubmit={handleSubmit} className="formCompra">
                <div className="inputsDatos">
                    <div className="datosForm nombreForm">
                        <label className="labelForm">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre del comprador"
                            className="inputNombre"
                            name="name"
                            value={buyer.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="datosForm emailForm">
                        <label className="labelForm">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="inputEmail"
                            name="email"
                            value={buyer.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="datosForm apellidoForm">
                        <label className="labelForm">Apellido</label>
                        <input
                            type="text"
                            placeholder="Apellido"
                            className="inputApellido"
                            name="lastName"
                            value={buyer.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <CartDetails cart={cart} cartTotal={cartTotal} />
                <button
                    className="clearCart comprar"
                    type="submit"
                >
                    COMPRAR
                </button>
            </form>
        </div>
    );

}


