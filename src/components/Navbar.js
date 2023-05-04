import { useContext } from "react";
import { Link } from 'react-router-dom';
import FavoritesContext from "./FavoritesContext";

function Navbar() {
    const { favorites } = useContext(FavoritesContext);
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favourites ({favorites.length})</Link>
                <Link to="/about">About</Link>

            </div>
        </nav>
    );
}

export default Navbar;



