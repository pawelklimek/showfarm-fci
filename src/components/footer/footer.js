import React from 'React';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme";

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;

  font-weight: 200;
  font-size: 0.8rem;
  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.darkGray};
`;

const Footer = () => {
    return (
        <FooterStyle>Created by Paweł Klimek, © 2020</FooterStyle>
    )
};

export default Footer;
