import React from 'React';
import { Link } from 'gatsby';

const Menu = () => {
  return (
    <div>
      <Link to="/">Showfarm</Link>
      <Link to="/dogs">Psy</Link>
      <Link to="/puppies">Szczeniaki</Link>
      <Link to="/about">O Nas</Link>
      <Link to="/contact">Kontakt</Link>
    </div>
  )
}

export default Menu;
