import React from "react"
import Menu from "./menu/menu"
import Footer from "./footer/menu"

const Layout = props => {
  return (
    <div>
      <Menu></Menu>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
