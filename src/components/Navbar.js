import React from "react";
import { Link } from 'react-router-dom';
import logo from './flavor-frenzy-high-resolution-logo-color-on-transparent-background.png'

function Navbar() {
    return (
        <nav>
            <div>
                <img className="logo" src={logo} alt="Flavor Frenzy" />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/favourites">Favorites</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;
