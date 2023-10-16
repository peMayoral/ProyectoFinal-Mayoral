import Item from "./Item"
import "../styles/ItemList.css"

export default function ItemList({products, category}){
    
    let mapeadoItems = [];

    if (category && category !== "ofertas"){
        mapeadoItems = products.filter((elemento)=>{return elemento.categoryId === category})
                               .map((elemento)=><Item key={elemento.id} elemento={elemento}/>);
    } else if (category === "ofertas"){
        mapeadoItems = products.filter((elemento)=>{return elemento.discount > 0})
                               .map((elemento)=><Item key={elemento.id} elemento={elemento}/>);
    } else {
        mapeadoItems = products.map((elemento)=><Item key={elemento.id} elemento={elemento}/>)
    
    }

    return (
    <div className="itemList">
        {mapeadoItems}
    </div>)
}