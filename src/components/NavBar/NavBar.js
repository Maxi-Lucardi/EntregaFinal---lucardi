import CardWidget from "../CardWiget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3 className="Title">Ecommerce</h3>
            </Link>
            <div className="NavMenu">
                <div className="Categories">
                  <div className="Column"><NavLink to={`/category/Computacion`} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}> Computacion</NavLink></div>
                  <div className="Column"> <NavLink to={`/category/Celulares`} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Celulares</NavLink></div>
                  <div className="Column"> <NavLink to={`/category/Consolas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Consolas</NavLink></div>
                </div>
            </div>
            <CardWidget />
        </nav>
    );

}

export default NavBar;