import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { CartContext } from "../context/CartContext";

export default function ItemDetailContainer(){
    const itemId = useParams().id;
    const products = useContext(ProductsContext);

    // filtra despues de que termina la carga
    if (products.loading){
    return <Loading />
    } else { 
    const item = products.list.find((elemento)=>{return elemento.id === itemId});
    return <ItemDetail item={item}/>}
}