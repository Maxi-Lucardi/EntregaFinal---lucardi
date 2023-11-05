import cart from './Assets/cart.png'
import "./CardWiget.css"
import { useContext } from 'react';
import { CartContext } from '../Context/CardContext';
import { Link } from 'react-router-dom';


const CardWidget = () => {
const {totalQuantity} = useContext(CartContext)


return (
    <div className="pepe">

        <Link to= '/cart' className='CarWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className="img-carrito" src={cart} alt='imagen-carrito' />
         {totalQuantity}
         </Link>
    </div>
)

}


export default CardWidget;