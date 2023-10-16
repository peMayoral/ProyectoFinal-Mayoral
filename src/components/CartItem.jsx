import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../styles/CartItem.css"
import Price from "./Price"
import ItemCount from "./ItemCount";



export default function CartItem({ item }) {


    const cartContext = useContext(CartContext);

    const removeItem = cartContext.removeItem;  


    //funciones para agregar y sacar unidades desde el carrito mismo
    function addCartUnit() {
        if (item.cantidad < item.stock) {
            cartContext.addItem(item, 1);
        }
    }    
    function removeCartUnit() {
        removeItem(item.id, 1);
    }
    
    //precio con desceunto si es que existe el descuento, sino precio normal
    const itemDiscountPrice = item.discount ? (item.price * (100 - item.discount) / 100) : item.price;



    return (
        <div className="cartItem">
            {item.discount > 0 ? <p className="discountTagCart">{item.discount}%</p> : <></>}
            <img src={"https://" + item.image} alt="" />
            <div className="cartItemInfo">
                <p className="cartTitle">{item.title}</p>
                <Price price={item.price} discount={item.discount} />
                <p>Unidades: </p><ItemCount count={item.cantidad} addCount={addCartUnit} removeCount={removeCartUnit} />
                <p>Costo total: ${itemDiscountPrice * item.cantidad}</p>
                <button onClick={() => { removeItem(item.id) }} >X</button>
            </div>
        </div>
    )
}