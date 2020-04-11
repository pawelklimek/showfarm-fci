import React from 'React';
import {Link} from 'gatsby';
import "./menu.scss"

const Menu = () => {
    return (
        <div className="menu">
            <Link className="menu-item" to="/">Showfarm</Link>
            <Link className="menu-item" to="/dogs">Psy</Link>
            <Link className="menu-item" to="/puppies">Szczeniaki</Link>
            <Link className="menu-item" to="/about">O Nas</Link>
            <Link className="menu-item" to="/contact">Kontakt</Link>
        </div>
    )
};

export default Menu;
