import { useContext } from "react";
import { Link } from 'react-router-dom';
import FavoritesContext from "./FavoritesContext";

function Navbar() {
    const { favourites } = useContext(FavoritesContext);

    console.log(favourites)
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favourites ({favourites.length})</Link>
                <Link to="/about">About</Link>

            </div>
        </nav>
    );
}

export default Navbar;
