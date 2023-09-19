import CardWidget from "../CardWiget/CardWiget"

const NavBar = () => {

    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Computacion</button>
                <button>Televisores</button>
                <button>Celulares</button>
                <button>Electrodomesticos</button>
            </div>
            <CardWidget />
        </nav>
    )



}

export default NavBar