import { useContext } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    const { favourites } = useContext(FavoritesContext);

    console.log(favourites)
    return (
        <nav>
            <div>
                <img className="logo" src={logo} alt="Flavor Frenzy" />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favourites ({favourites.length})</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;
