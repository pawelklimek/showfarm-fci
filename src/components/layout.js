import React from "react"
import Menu from "./menu/menu"
import Footer from "./footer/footer"
import '../styles/global.scss'
import './layout.scss'

const Layout = props => {
    return (
        <div className="wrapper" >
            <Menu></Menu>
            <div className="layout">{props.children}</div>
            <Footer></Footer>
        </div>
    )
};

export default Layout
