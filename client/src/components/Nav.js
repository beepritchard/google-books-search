import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h2>Google Books Search App</h2>
            <Link to="/">Search Books</Link>
            <Link to="/saved">Saved Books</Link>
        </nav>
    );
}

export default Nav;