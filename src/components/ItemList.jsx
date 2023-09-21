import "../styles/ItemList.css"
import { useEffect, useState } from "react";
import mockAPI from "../mockAPI";
import Item from "./Item";  

export default function ItemList({ categoria }) {

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