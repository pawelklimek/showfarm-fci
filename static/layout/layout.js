import React from "react";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components"
import {theme} from "./theme";
import Menu from "../../src/components/menu/menu";
import Footer from "../../src/components/footer/footer";

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  overflow:hidden;

  font-family: "Manrope"; 
  font-style: normal;
  border-radius: 1px;
  color: ${theme.colors.fontColorGray}
  scroll-behavior: smooth;  
 }`;

const LayoutWrapper = styled.div`
  
  background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );

  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 1.4rem;
  ${theme.media.deviceSize.laptop} {
    font-size: 1rem;
    padding: 0 5rem;
  }
`;

const Content = styled.div`
  align-self: center;
  flex-grow: 1;
  overflow-y: auto;

  padding-top: 4%;
  max-width: 1200px;
   
  ::-webkit-scrollbar {
    width: 4px;
    box-shadow: ${theme.effects.shadow};
  }

  ::-webkit-scrollbar-thumb {
    background:${theme.colors.fontColorGray};
    transition: all 1s ease;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background:${theme.colors.detailColor};  
    box-shadow: ${theme.effects.shadow};
  }
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <LayoutWrapper>
            <GlobalStyle/>
            <Menu/>
            <Content>{children}</Content>
            <Footer/>
        </LayoutWrapper>
    </ThemeProvider>
);

export default Layout;
