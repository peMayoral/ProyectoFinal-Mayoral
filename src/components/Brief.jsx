import { Link } from "react-router-dom"
import "../styles/CartList.css"



// Muestra del carrito previo a la compra, recibe los hijos ya preparados desde CartListContainer
export default function Brief({children, cartClear, cartTotal}){
    return (
    <div id="cartList">
        <div className="cartActions">
            <button onClick={cartClear} className="vaciarCarrito">Vaciar carrito</button>
            <p>Total: ${cartTotal}</p>
            <Link to="/checkout" className="finalizarCompra">Finalizar Compra</Link>
        </div>
        {children}
    </div>)
}