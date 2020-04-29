import React from 'react';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme";

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.5%;
  
  font-weight: 200;
  font-size: 0.8rem;
  color: ${theme.colors.fontColorGray};
  background-color: ${theme.colors.backgroundColor};
`;

const Footer = () => {
    return (
        <FooterStyle>Created by Paweł Klimek, © 2020</FooterStyle>
    )
};

export default Footer;
