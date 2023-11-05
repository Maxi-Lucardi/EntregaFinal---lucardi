import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CardContext";
import { Link } from "react-router-dom";

const ItemDetail = ({id, nombre, img, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const hanleOnAdd  = (quantity) =>{
        setQuantityAdded(quantity)

        const item= {
            id, nombre, price
        }
        addItem(item, quantity)
    }

return(

<article className="CardItem">
    <header className="Header">
        <h2 className="ItemHeader"> {nombre}</h2>
    </header>
    <picture>
        <img src={img} alt= {nombre} className="ItemImg" />
    </picture>
    <section >
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {description}</p>
        <p className="Info_precio">Precio en u$s: {price}</p>
    </section>
    <footer className="ItemFooter">{
        quantityAdded > 0 ? (
        <Link to= "/cart" className="Option">Terminar compra</Link>
        ):(
        <ItemCount initial={1} stock={stock} onAdd={hanleOnAdd} />
        )
    }
    </footer>


</article>

)


}

export default ItemDetail