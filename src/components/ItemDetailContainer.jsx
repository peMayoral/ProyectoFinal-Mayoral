import "../styles/ItemDetailContainer.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockAPI from "../mockAPI";
import ItemCount from "./ItemCount";

function Precio({ price, oferta }) {
    if (!oferta) {
        return (
            <p className="precio">{price}</p>
        )
    }
    return (
        <div className="oferta">
            <p className="precio viejo">{price}</p>
            <p className="desc">-{oferta}%</p>
            <p className="precio">{price * (1 - (oferta / 100))}</p>
        </div>
    )
}


export default function ItemDetailContainer() {
    const id = useParams().itemId;
    const [item, setearItem] = useState(null);

    useEffect(
        () => {
            let ignorar = false;
            setearItem(null);

            mockAPI(id).then(
                (resp) => {
                    setearItem(resp)
                });

            return () => { ignorar = true }


        }, [id])


    if (!item) {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <div className="itemDetailContainer">
            <img src={item.pictureUrl} alt="" />
            <div>
                <h2>{item.title}</h2>
                <Precio price={item.price} oferta={item.oferta}/>
                <p>{item.description}</p>
                <ItemCount />
            </div>
        </div>

    )
}