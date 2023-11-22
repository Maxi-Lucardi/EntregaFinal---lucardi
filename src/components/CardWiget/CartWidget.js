import cart from './Assets/carritoOne.png'
import "./CartWidget.css";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

// function CardWidget (){

//     return (
//         <div className='pepe'>
//             <img className='img-carrito' src={cart} alt="cart-widget"/>
//             0
//         </div>
//     )
// }




const CardWidget = () => {
const {totalQuantity} = useContext(CartContext)


return (
    <div className="pepe">

        <Link to= '/Cart' className='CardWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className="img-carrito" src={cart} alt='imagen-carrito' />
         {totalQuantity}
         </Link>
    </div>
)

}


export default CardWidget;