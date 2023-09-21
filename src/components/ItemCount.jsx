import "../styles/ItemCount.css"
import { useRef, useState, useEffect } from "react"

export default function ItemCount({stock = 10, initial = 0}) {
    const [contadorUnidades, setearContador] = useState(initial);

    function incrementarUnidades() {
        if (contadorUnidades < stock) {
            setearContador(contadorUnidades + 1);
        }
    }
    
    function reducirUnidades() {
        if (contadorUnidades > 0) {
            setearContador(contadorUnidades - 1);
        }
    }

    return (
        <div className="unitsBox">
            <p>Unidades:</p>
            <div className="counterBox">
                <button onClick={reducirUnidades}>-</button>
                <p>{contadorUnidades}</p>
                <button onClick={incrementarUnidades}>+</button>
            </div>
        </div>
    )
}