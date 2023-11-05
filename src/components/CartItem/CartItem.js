import { CartContext } from "../Context/CardContext";
import React from "react";
import { useContext } from "react";



const CartItem = ({products}) => {
const {removeProducts} = useContext(CartContext)

return(
    <div className="container">
        <picture>

    <img src={products.img} alt={products.nombre} className="imgContainer"/>

        </picture>
    <div className="productsCategories">
        <h2>
            {products.nombre}
        </h2>
        <p>
            Cantidad: {products.quantity}
        </p>
        <p>
            Subtotal: {products.quantity * products.price}
        </p>

        <button onClick={() => removeProducts(products.id)}>Eliminar</button>
    </div>


    </div>
)


}

export default CartItem