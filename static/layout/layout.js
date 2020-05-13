import React from "react"
import styled, {createGlobalStyle, ThemeProvider} from "styled-components"
import {theme} from "./theme";
import Menu from "../../src/components/menu/menu";
import Footer from "../../src/components/footer/footer";
import MetaData from "../../src/components/meta-data/meta-data";

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
  ::-webkit-scrollbar {
  display: none;
  }
  -ms-overflow-style: none;
  padding-top: 4%;
  max-width: 1200px;
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <MetaData/>
        <LayoutWrapper>
            <GlobalStyle/>
            <Menu/>
            <Content>{children}</Content>
            <Footer/>
        </LayoutWrapper>
    </ThemeProvider>
);

export default Layout;
