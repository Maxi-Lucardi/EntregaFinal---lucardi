import CardWidget from "../CardWiget/CardWiget"
import "./NavBar.css"
import { Link, NavLink} from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="NavBar">
            <Link to='/'>
            <h3>Ecommerce</h3>
            </Link>
            <div className="NavMenu">
            <div className="Categories">
                <NavLink to={'/category/Computacion'} className={({isActive}) => isActive ? 'activeOption' : 'option'}> Computacion</NavLink>
                <NavLink to={'/category/Televisores'} className={({isActive}) => isActive ? 'activeOption' : 'option'} > Televisores</NavLink>
                <NavLink to={'/category/Celulares'} className={({isActive}) => isActive ? 'activeOption' : 'option'}>Celulares</NavLink>
                <NavLink to={'/category/Electrodomesticos'} className={({isActive}) => isActive ? 'activeOption' : 'option'}>Electrodomesticos</NavLink>
            </div>
            </div>
            <CardWidget />
        </nav>
    );

}

export default NavBar;