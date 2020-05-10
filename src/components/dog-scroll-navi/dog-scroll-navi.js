import React from 'react';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme"
import scrollTo from "gatsby-plugin-smoothscroll";
import {HoverAnimationStyle} from "../animation/animation";

const active = "active";

const DogScrollMenu = styled(HoverAnimationStyle)`
  display:none;
 
  ${theme.media.deviceSize.laptopL} {
    position: absolute;
    top:29%;
    left: 2%;  
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding: 1rem 0;  
    
    width: 13%;
    
    background-color: ${theme.colors.backgroundColor};
    box-shadow: ${theme.effects.shadow};
    
    z-index: 1000;
  }
}
`;

const Menu = styled.div`
  padding-top: 1%;
  text-align: center;
`;

const MenuItem = styled.div`
  position: relative;
 
  padding-top: 1%;
 
  font-size: 1rem;
  font-weight: 200;
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.mediumGray};
  transition: all 1s ease;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -0.25rem;
   
    width: 100%;
   
    height: 1px;
    background-color: ${theme.colors.detailColor};
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
      color: ${theme.colors.fontColorGray};
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;

const DogScrollNavi = () => {
    return (
        <DogScrollMenu showDelay={0.2}>
            <Menu>{"Miniaturowy Owczarek Amerykański"}</Menu>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#joy')}>Joy</MenuItem>
            <Menu>{"Owczarek Australijski"}</Menu>
            <Menu>Suki:</Menu>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#dora')}>Dora</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#maizy')}>Maizy</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#mora')}>Mora</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#abi')}>Abi</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#jaga')}>Jaga</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#dakota')}>Dakota</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#ruby')}>Ruby</MenuItem>
            <Menu>Reproduktor:</Menu>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#brag')}>Brag</MenuItem>
        </DogScrollMenu>
    )
};

export default DogScrollNavi;
