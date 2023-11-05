
import { useContext } from "react";
import { CartContext } from "../Context/CardContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = () =>{

const {cart, clearCart, totalQuality, total} = useContext(CartContext)

if(totalQuality === 0) {

return (
    <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className="Option">Productos</Link>
    </div>
)


}

return (
    <div>
        { cart.map(p => <CartItem key={p.id} {...p} />)}
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button">Vaciar carrito</button>
        <Link to= '/checkout' className='Option'> Confirmar compra</Link>
    </div>
)

}

export default Cart