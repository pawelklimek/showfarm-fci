import React from "react"
import styled from "styled-components";
import contactBlack from "./../../static/images/contact/contactBlack.jpg"
import Separator from "./../components/separator/separator"
import Layout from "../../static/layout/layout";

const Background = styled.div`
  display: flex;
  background-image: url(${contactBlack});
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  opacity: 1;
  color: white;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 25rem;
  background-color: rgba(214, 214, 214, 0.5);
  margin: 2rem;
  padding: 1rem;
`;

const Contact = styled.div`
   text-decoration: none;
   text-align: center;
   color: white;
`;

const ContactLink = styled.div`
    text-decoration: none;
    text-align: center;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      color: #3b5998;
    }
`;

const ContactPage = () => {
    return (
        <>
            <Layout>
                <Background>
                    <Card>
                        <Header>KONTAKT</Header>
                        <Separator/>
                        <Contact>Serdecznie zapraszamy do kontaktu!</Contact>
                        <Contact> Zawsze chętnie udzielimy wszelakich informacji na temat naszych psów</Contact>
                        <br/>
                        <Contact>Założycielka hodowli: Karolina Klimek</Contact>
                        <Contact href="mailto:showfarm.kennel@gmail.com">showfarm.kennel@gmail.com</Contact>
                        <Contact>+48 509 354 704</Contact>
                        <ContactLink href="https://www.facebook.com/showfarm.kennel">Facebook</ContactLink>
                        <br/>
                        <Contact>Poznań</Contact>
                    </Card>
                </Background>
            </Layout>
        </>
    )
};

export default ContactPage
