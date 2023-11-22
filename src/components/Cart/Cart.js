
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = () =>{

const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

if(totalQuantity === 0) {

return (
    <div className="cart_final"> 
        <h1>No hay items en el carrito</h1>
        <Link to='/' className="btnInicio">Inicio</Link>
    </div>
)


}

return (
    <div className="cart_final">
        { cart.map(p => <CartItem key={p.id} {...p} />)}
        <h3>Total: u$s{total}</h3>
        <button onClick={() => clearCart()} className="Button">Vaciar carrito</button>
        <Link to= '/Checkout' className='Option'> Confirmar compra</Link>
    </div>
)

}

export default Cart