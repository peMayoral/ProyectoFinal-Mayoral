import { Link } from "react-router-dom"
import cartSvg from "../assets/cart.svg"
import "../styles/CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"



//widget del carrito
export default function CartWidget() {

    //usa el contexto del carrito para conseguir los items en total
    const totalProductAmount = useContext(CartContext).totalItems();

    return (
        //linkea al la vista del cart si hay items
        <Link to={totalProductAmount? "/cart":undefined} className="cartWidget">
            <img src={cartSvg} alt="Carrito de Compra" />
            {totalProductAmount > 0 ? <p className="cartCounter">{totalProductAmount}</p> : <></>}
        </Link>)
}