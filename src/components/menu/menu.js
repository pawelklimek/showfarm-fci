import React from 'React';
import {Link} from 'gatsby';
import "./menu.scss"

const Menu = () => {
    return (
        <div className="menu">
            <Link className="menu-item" activeClassName="menu-item-active" to="/">Showfarm FCI</Link>
            <Link className="menu-item" activeClassName="menu-item-active" to="/dogs">Psy</Link>
            <Link className="menu-item" activeClassName="menu-item-active" to="/puppies">Szczeniaki</Link>
            <Link className="menu-item" activeClassName="menu-item-active" to="/about">O Nas</Link>
            <Link className="menu-item" activeClassName="menu-item-active" to="/contact">Kontakt</Link>
        </div>
    )
};

export default Menu;
