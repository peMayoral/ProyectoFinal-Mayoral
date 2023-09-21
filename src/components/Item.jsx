import "../styles/Item.css"
import { Link } from "react-router-dom";

function Precio({price, oferta}){
    if(!oferta){
        return (
            <p className="precio">{price}</p>
            )
    }
    return(
        <div className="oferta">
            <p className="precio viejo">{price}</p>
            <p className="desc">-{oferta}%</p>
            <p className="precio">{price*(1-(oferta/100))}</p>
        </div>        
    )
}



export default function Item ({elemento:{id, title, price, pictureUrl, oferta}}){

    return(
        <div className="item" key={id}>
            <div>
                <img src={pictureUrl} alt="" />
            </div>
            <div>
                <p>{title}</p>
                <Precio price={price} oferta={oferta}/>
                <Link to={`/item/${id}`}>Ver Mas</Link>
            </div>


        </div>
    )
}