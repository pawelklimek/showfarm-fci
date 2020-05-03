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
        text-shadow: ${theme.effects.shadow};

  color: ${theme.colors.fontColorGray};
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -0.25rem;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.darkGold};
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
  
  &.${active}{
      color: ${theme.colors.darkGold};
    
    &:hover {
      color: ${theme.colors.darkGold};
    }
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
