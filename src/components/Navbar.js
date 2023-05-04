import { useContext } from "react";
import { Link } from 'react-router-dom';
import FavoritesContext from "./FavoritesContext";
import logo from './flavor-frenzy-high-resolution-logo-color-on-transparent-background.png'
import './Navbar.css'

function Navbar() {
    const { Favorites } = useContext(FavoritesContext);

    console.log(Favorites)
    return (
        <nav>
            <div className="nav">
            <div className="logo-title">
                    <Link to="/">
                        <img src={logo} alt="Flavor Frenzy Logo" className="logo" />
                    </Link>
                    <h1 className="title">Flavor Frenzy</h1>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/favorites">Favorites ({Favorites.length})</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
