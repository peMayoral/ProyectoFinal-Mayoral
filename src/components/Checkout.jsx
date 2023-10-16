import { useContext, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import "../styles/Checkout.css"
import Loading from "./Loading";


export default function Checkout() {


    //trackear el estado de firebase para cambiar pantalla acorde
    const [estadoFirebase, setEstadoFirebase] = useState(false);
    const [idFirebase, setIdFirebase] = useState(0);


    //Armar referencias al documento de firebase
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");


    //obtener datos del carrito actual, si esta vacio avisamos que esta vacio
    const cartContext = useContext(CartContext);
    if (!cartContext.cart.length > 0 && !estadoFirebase) {
        return <h2 className="carritoVacio">No hay productos en el carrito</h2>
    }
    //reducimos la cantidad de info de cada item para la compra
    const arrayCompra = cartContext.cart.map((item) => ({ id: item.id, title: item.title, price: item.price, cantidad: item.cantidad }));
    //agregamos el costo total
    const detallesCompra = { items: arrayCompra, total: cartContext.montoTotal() };


    // usar referencias en vez de estado parece mas eficiente? no necesitamos rerenders ni nada especifico al estado
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    //envio de la compra
    function submitForm(e) {
        e.preventDefault();
        //para no repetir el mismo pedido
        if (!estadoFirebase) {
            setEstadoFirebase(true);
            detallesCompra.buyer = { name: nameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value };
            detallesCompra.date = serverTimestamp()
            addDoc(ordersCollection, detallesCompra).then(({ id }) => { setIdFirebase(id); cartContext.clear() });
        }
    }


    return (
        //Si no enviamos aun una compra a Firebase, mostramos el checkout
        !estadoFirebase ? (
            <div id="checkout">
                <h1>Formulario de compra</h1>
                <form onSubmit={submitForm} id="formularioCompra">

                    <label htmlFor="formNombre">Nombre Completo</label>
                    <input ref={nameRef} type="text" name="nombre" id="formNombre" defaultValue="Pedro Mayoral" required />

                    <label htmlFor="formEmail">Email</label>
                    <input ref={emailRef} type="email" name="email" id="formEmail" defaultValue="react@coderhouse.com" required />

                    <label htmlFor="repEmail">Repetir Email</label>
                    <input type="email" name="emailRep" id="repEmail" defaultValue="react@coderhouse.com" pattern={emailRef?.current?.value} required />

                    <label htmlFor="formPhone">Phone</label>
                    <input ref={phoneRef} type="tel" name="phone" id="formPhone" defaultValue="12 3456 3456" required />

                    {/* Si ya mandamos un formulario sacamos el boton para no subir mas */}
                    {estadoFirebase ? <></> : <input type="submit" id="submitButton" value="Finalizar compra!" />}

                </form>
                {/* Si ya se envio la compra a firebase, mostrar cargando hasta que conseguimos el id */}
            </div>) : idFirebase ? (<div className="displayFirebase"><p>El Id de tu compra es:</p><p>{idFirebase}</p></div>) : <Loading />
    )
}