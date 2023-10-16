import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem";
import "../styles/CartListContainer.css"
import Brief from "./Brief";


//Arma la lista de items del carrito y se la pasa a brief
export default function CartListContainer(){

    //Conseguios el carrito actual y lo mapeamos a items del brief a mostrar
    const cartContext = useContext(CartContext);
    const cartMap = cartContext.cart.map((item)=>{return <CartItem key={item.id} item={item}/>});

    //Calculamos el monto total del carrito
    const totalAmount = cartContext.montoTotal();

    return (
            //si hay elementos en el carrito llamamos a brief para mostrarlos, sino avisamos que no hay 
            cartMap.length?
            <Brief cartClear={cartContext.clear} cartTotal={totalAmount}>{cartMap}</Brief>
            :<h2 className="carritoVacio">No hay productos en el carrito</h2> )
}