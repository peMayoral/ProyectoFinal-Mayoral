import "../styles/NavBar.css"
import cartIcon from "../assets/cart.svg"
import { Link, NavLink } from "react-router-dom"


function CartWidget() {
    return (
        <div id="cartWidget" >
            <img src={cartIcon} alt="" />
            <p id="cartCounter">1</p>
        </div>)
}

export default function NavBar(){
    return(
        <header>
            <Link to="./" className="logoStore">PedroStore</Link>

            <ol className="navigationLinks">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/category/comidaPreparada">Comidas Preparadas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/comidaCongelada">Comidas Congeladas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/bebidas">Bebidas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/ofertas">Ofertas</NavLink>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ol>
        </header>
    )
}