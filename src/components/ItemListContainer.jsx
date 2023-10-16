import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ItemList from "./ItemList";
import "../styles/ItemListContainer.css"

export default function ItemListContainer() {
    const categoryId = useParams().categoryId;
    const products = useContext(ProductsContext);

    return (<>
                <h1 id="listCategory" >{categoryId??"Inicio"}</h1>
                {products.loading? <Loading /> : <ItemList products={products.list} category={categoryId}/>}
            </>)
}