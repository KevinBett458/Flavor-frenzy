import React from "react";
import { Link } from 'react-router-dom';
import  "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/favourites">Favorites</Link>
                <Link to="/about">About</Link>

            </div>
        </nav>
    );
}

export default Navbar;



