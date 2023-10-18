
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, nombre, img, price, stock}) => {

return(

<article className="Carditem">
    <div className="Card__flex">
    <header className="header">
        <h2 className="ItemHeader">{nombre}</h2>
    </header>
<picture className="Card__picture">
    <img src={img} alt={nombre} className="ItemImg" />
</picture>
    <section>
        <p className="Info"> precio: u$s: {price} </p>
        <p className="Info"> Stock disponible: {stock}</p>
    </section>
    </div>
<footer className="ItemFooter">
<Link to={`/item/${id}`} className="Option">Ver detalle</Link>
</footer>

</article>

)
}


export default Item