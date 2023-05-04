import { useContext } from "react";
import { Link } from 'react-router-dom';
import FavoritesContext from "./FavoritesContext";

function Navbar() {
    const { Favorites } = useContext(FavoritesContext);

    console.log(Favorites)
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites ({Favorites.length})</Link>
                <Link to="/about">About</Link>

            </div>
        </nav>
    );
}

export default Navbar;
