import "../styles/Price.css"

export default function Price({ price, discount }) {
    if(discount && discount>0){
        return(
            <p className="price"><del>${price}</del> ${price*(100-discount)/100}</p>
        )
    }
    return (
        <p className="price">${price}</p>
    )

}