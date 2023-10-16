import { Link } from "react-router-dom"
import "../styles/Item.css"
import Price from "./Price"

export default function Item({ elemento }) {
    return (
        <Link to={`/item/${elemento.id}`} className="itemContainer">
            {elemento.discount > 0 ? <p className="discountTag">{elemento.discount}%</p> : <></>}
            <p className="categoryTag">{elemento.categoryId}</p>
            <img src={"https://" + elemento.image} alt="" />
            <div className="itemInfo">
                <p className="itemTitle">{elemento.title}</p>
                <Price price={elemento.price} discount={elemento.discount} />
            </div>
        </Link>

    )
}