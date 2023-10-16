import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import Price from "./Price";
import { CartContext } from "../context/CartContext";
import "../styles/ItemDetail.css"


// Display de los detalles de un item en particular -- accediendo a traves de /item/
export default function ItemDetail({ item }) {

    //Contexto del carrito para agregar los items
    const cartContext = useContext(CartContext);

    //Como agregamos los items al carrito desde aca, averiguamos cuantos hay en el carrito para no pasarnos del stock
    const cantidadCarrito = cartContext.cart.find((elemento)=>{return elemento.id === item.id})?.cantidad ?? 0;


    //Manejo de la cantidad de items a ser agregados
    const [count, setCount] = useState(0);
    function addCount() {
        //Agregar uno mientras la cantidad no pase el stock, teniendo en cuenta los items ya agregados
        if (count < (item.stock - cantidadCarrito)) {
            setCount(count + 1);
        }
    }

    //Si count no es 0 reduce por 1, si es 0 mantiene 0
    function removeCount() {
        setCount(count ? count - 1 : count)
    }



    return (

        item?(<div className="itemDetail">
            {/* Render opcional del cartel de descuento */}
            {item.discount > 0 ? <p className="discountTagItem">{item.discount}%</p> : <></>}
            <img src={"https://" + item.image} alt="" />
            <div className="productDetails">
                <h1>{item.title}</h1>
                <Price price={item.price} discount={item.discount} />
                <ItemCount count={count} addCount={addCount} removeCount={removeCount} />
                
                {/* Agrega al carrito el item con la cantidad seleccionada y resetea el contador de unidades a ser agregadas */}
                <button onClick={() => { cartContext.addItem(item, count); setCount(0) }}>Agregar al Carrito</button>
            </div>
            <p>{item.description}</p>
            {/* Si no se encuentra el elemento avisa */}
        </div>):<h2 className="inexistente">El producto al que se quiere acceder no existe :{"("}</h2>


    )
}