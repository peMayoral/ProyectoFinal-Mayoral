import "../styles/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockAPI from "../mockAPI";
import Item from "./Item";  


function ItemList({ categoria }) {

    const [productos, setearProductos] = useState(null);

    const mapElementos = productos?.map((elemento)=>{return <Item elemento={elemento}/>})

    useEffect(
        () => {
            let ignorar = false;
            setearProductos(null);

            mockAPI().then(
                (prod) => {
                    if (ignorar) return;
                    if (!categoria) { setearProductos(prod); return }

                    if (categoria === "ofertas") {
                        setearProductos(prod.filter((elemento) => elemento?.oferta));
                        return
                    }

                    setearProductos(prod.filter((elemento) => elemento.category === categoria))

                });

            return ()=>{ignorar = true}


        }, [categoria])

    return (
        <section className="itemList">
            {mapElementos ?? "Cargando..."}
        </section>
    )
}


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