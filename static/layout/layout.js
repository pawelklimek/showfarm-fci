import React from "react"
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
 }`;

const LayoutWrapper = styled.div`

  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgb(67,144,233) 0%, rgba(78,226,198,1) 90.1% );
  
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
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 4%
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
