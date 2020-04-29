import React from 'react';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme"
import scrollTo from "gatsby-plugin-smoothscroll";

const active = "active";

const DogScrollMenu = styled.div`
  ${theme.effects.animation.entranceTop}
  ${theme.media.desktop} {
  position: absolute;
  top: 12%;
  left: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.backgroundColor};
  width: 30%;
  height: 50%;
  box-shadow: ${theme.effects.shadow}
 }
`;

const Menu = styled.div`
  padding-top: 1%;
  white-space: pre-wrap;
`;

const MenuItem = styled.div`
  position: relative;
  color: ${theme.colors.mediumGray};
  font-weight: 200;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  padding-top: 1%;
  transition: all 1s ease;
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

  &:hover {
      color: ${theme.colors.fontColorGray};
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;

const DogScrollNavi = () => {
    return (
        <DogScrollMenu>
            <Menu>{""}</Menu>
            <Menu>{"Miniaturowy Owraczek Amerykański"}</Menu>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#joy')}>Joy</MenuItem>
            <Menu>{"Owraczek Australijski"}</Menu>
            <Menu>Suki:</Menu>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#dora')}>Dora</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#maizy')}>Maizy</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#mora')}>Mora</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#jaga')}>Jaga</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#dakota')}>Dakota</MenuItem>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#ruby')}>Ruby</MenuItem>
            <Menu>Reproduktor:</Menu>
            <MenuItem activeClassName={active} onClick={() => scrollTo('#brag')}>Brag</MenuItem>
        </DogScrollMenu>
    )
};

export default DogScrollNavi;
