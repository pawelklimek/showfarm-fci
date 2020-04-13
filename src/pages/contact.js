import React from "react"
import Layout from "../components/layout"
import "./contact.scss"

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <div className="background">
                    <div className="card">
                        <h1 className="header">KONTAKT</h1>
                        <div className="line"/>
                        <p className="contact">Serdecznie zapraszamy do kontaktu!</p>
                        <p className="contact"> Zawsze chętnie udzielimy wszelakich informacji na temat naszych psów</p>
                        <br/>
                        <p className="contact">Założycielka hodowli: Karolina Klimek</p>
                        <a className="contact" href="mailto:showfarm.kennel@gmail.com">showfarm.kennel@gmail.com</a>
                        <p className="contact">+48 509 354 704</p>
                        <a className="contact-link" href="https://www.facebook.com/showfarm.kennel">Facebook</a>
                        <br/>
                        <p className="contact">Poznań</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
};

export default ContactPage
