import { createContext, useState } from "react";



export const CartContext = createContext({});

export default function CartContextProvider({ children }) {

    //Obtiene el cart de loclStorage, sino arranca uno vacio
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ?? []);

    //funcion agregadora de todos los items, devuelve la suma del precio * cantidad de todos los items en el carrito
    function montoTotal(){
        return cart.reduce((acumulador, itemActual)=> {return acumulador + (itemActual.price * itemActual.cantidad)}, 0)
    }
    function totalItems(){
        return cart.reduce((acumulador, itemActual)=>{return acumulador + itemActual.cantidad}, 0);
    }

    function addItem(itemRecibido, quantity) {

        const nuevoCarrito = [...cart];
        const item = {...itemRecibido};

        const itemExistente = nuevoCarrito.find((elemento) => { return elemento.id === item.id });

        if (itemExistente) {

            itemExistente.cantidad += quantity;

        } else if(quantity) {

            item.cantidad = quantity;
            nuevoCarrito.push(item);

        }
        setCart(nuevoCarrito);
        localStorage.setItem("cart", JSON.stringify(nuevoCarrito))
    };

    function removeItem(id, quantity) {

        const nuevoCarrito = [...cart];

        const elementIndex = nuevoCarrito.findIndex((element) => { return element.id === id });

        
        //el flujo es, si no existe el item retorno -> existe y quiero eliminar menos unidades que el total(pongo el nuevo total sin esas unidades) -
        // -> si el total es menor o iual a las unidades a borrar borro el elemento en si;

        //si no existe el elemento findIndex devuelve -1
        if (elementIndex < 0) {
            return
        } else if (quantity && (quantity > 0) && (nuevoCarrito[elementIndex].cantidad > quantity)) {
            nuevoCarrito[elementIndex].cantidad -= quantity;
        } else {
            nuevoCarrito.splice(elementIndex, 1);
        }

        setCart(nuevoCarrito);
        localStorage.setItem("cart", JSON.stringify(nuevoCarrito));

    }


    function clear() {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    }





    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, montoTotal, totalItems }}>
            {children}
        </CartContext.Provider>
    )

}