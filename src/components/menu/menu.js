import React from 'react';
import styled from "styled-components";
import {theme} from "static/layout/theme"
import {Link} from "gatsby";

const active = "active";

const MenuWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
  padding: 0.5rem 0;
 
  background-color: ${theme.colors.backgroundColor};
  box-shadow: ${theme.effects.shadow};
  ${theme.media.deviceSize.laptop} {
    width: 450px;
    top: 1%;
    left: 1%;
  }
`;

const MenuItem = styled.div`
  position: relative;
 
  font-weight: 200;
  font-size: 1rem;
  text-decoration: none;
  margin: 0 1%;
  color: ${theme.colors.fontColorGray};
  text-shadow: ${theme.effects.shadow};
 
  transition: all 1s ease; 
  &.${active} {
      color: ${theme.colors.detailColor};
  }
  &:hover {
      color: ${theme.colors.mediumGray};
  }
`;

const Menu = () => {
    return (
        <div>
            <MenuWrapper>
                <MenuItem as={Link} activeClassName={active} to="/">Showfarm</MenuItem>
                <MenuItem as={Link} activeClassName={active} to="/dogs">Psy</MenuItem>
                <MenuItem as={Link} activeClassName={active} to="/puppies">Szczeniaki</MenuItem>
                <MenuItem as={Link} activeClassName={active} to="/gallery"> Galeria</MenuItem>
                <MenuItem as={Link} activeClassName={active} to="/about">O Nas</MenuItem>
                <MenuItem as={Link} activeClassName={active} to="/contact">Kontakt</MenuItem>
            </MenuWrapper>
        </div>
    )
};

export default Menu;
