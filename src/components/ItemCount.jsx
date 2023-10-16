import "../styles/ItemCount.css"




export default function ItemCount({count, addCount, removeCount}){
    return (
    <div id="itemCount">
        <button onClick={()=>{removeCount()}}>-</button>
        <p>{count}</p>
        <button onClick={()=>{addCount()}} >+</button>
    </div>
    )
}