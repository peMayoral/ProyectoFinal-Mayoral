import "../styles/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const titulos = {
    "comidaPreparada": "Comidas Preparadas",
    "comidaCongelada": "Comidas Congeladas",
    "bebidas": "Bebidas",
    "ofertas": "Ofertas"
}

export default function ItemListContainer({greeting}){

    const categoria = useParams().categoryId;
    greeting = greeting ? greeting : titulos[categoria];

    return (
        <main>
            <h1 className="greeting">{greeting}</h1>
            <ItemList categoria={categoria}/>
        </main>
    )
}