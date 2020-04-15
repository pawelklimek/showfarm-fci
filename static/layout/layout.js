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
  font-family: "Montserrat";
  font-weight: ${theme.font.thin};
  }`;

const LayoutWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
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
