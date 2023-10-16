import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import '../styles/NavBar.css'


export default function NavBar() {
    return (
        <header>

            <input type="checkbox" name="navToggle" id="navToggle" />
            <label className="labelToggle" htmlFor="navToggle"><div id="menuHamburguesa"><div></div></div></label>

            <Link to="/" className="headerLogo">
                <img
                    src="/resources/img/desquiciados467x176.png"
                    alt="" />
            </Link>

            <nav id="navList">
                <ol>
                    <li className="navLink">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="navLink">
                        <Link to="/category/salsas">Salsas</Link>
                    </li>
                    <li className="navLink">
                        <Link to="/category/semillas">Semillas</Link>
                    </li>
                    <li className="navLink">
                        <Link to="/category/comidas">Comidas</Link>
                    </li>
                    <li className="navLink">
                        <Link to="/category/ofertas">Ofertas</Link>
                    </li>
                </ol>
            </nav>
            <CartWidget />

        </header>
    )
}