import React from "react"
import { theme } from "./theme"
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  overflow:hidden;
  font-family: "Montserrat", serif;
  color: ${({ theme }) => theme.colors.black} 
  background: ${({ theme }) => theme.colors.white} 
  }`
const Div = styled.div`
  height: 100vh;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Div>{children}</Div>
    </>
  </ThemeProvider>
)
export default Layout
