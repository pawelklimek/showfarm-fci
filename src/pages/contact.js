import React from "react";
import styled from "styled-components";
import Layout from "static/layout/layout";
import Separator from "src/components/separator/separator"
import image from "static/images/contact/contact-1.jpg"
import facebook from "static/images/contact/facebook.svg"

import {theme} from "static/layout/theme";
import {HoverAnimationStyle} from "src/components/animation/animation";
import MetaData from "../components/meta-data/meta-data";

const Header = styled.div`
  color: ${theme.colors.fontColorGray};
  text-shadow: ${theme.effects.shadow};
  font-size: 2rem;
  font-weight: 200;
`;

const Card = styled(HoverAnimationStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 1rem;
  
  box-shadow: ${theme.effects.shadow};
  background-color: ${theme.colors.backgroundColor};
`;

const Contact = styled.div`
   margin: 2px;
   color: ${theme.colors.fontColorGray};
   text-align: center;
   text-decoration: none;
`;

const ContactLink = styled.a`
    margin-top: 5px;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease;
    color: #3b5998; 
`;

const CardWrapper = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;

padding: 0 1rem;
`;

const FacebookIcon = styled.img`
margin-left: 5px;
height: 20px;
width: 20px;
`;

const ImageWrapper = styled(HoverAnimationStyle)`  
  padding: 0 1rem 1rem 1rem;
`;

const BigImg = styled.div`  
  flex: 0 0 100%;
  height: 40vh;
  padding: 1rem;

  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: ${theme.effects.shadow};
`;

const ContactPage = () => {
    return (
        <Layout>
            <MetaData
                title={"Showfarm | Kontakt"}
                description={"Hodowla Karolina Klimek Showfarm FCI Poznań"}/>
            <ImageWrapper showDelay={0.2}>
                <BigImg imgUrl={image}/>
            </ImageWrapper>
            <CardWrapper>
                <Card showDelay={0.4}>
                    <Header>KONTAKT</Header>
                    <Separator color={theme.colors.detailColor}/>
                    <Contact>Serdecznie zapraszamy do kontaktu!</Contact>
                    <Contact>Zawsze chętnie udzielimy wszelakich informacji na temat naszych psów.</Contact>
                    <br/>
                    <Contact>Założycielka hodowli: Karolina Klimek</Contact>
                    <Contact as={'a'} href="mailto:showfarm.kennel@gmail.com">showfarm.kennel@gmail.com</Contact>
                    <Contact>+48 509 354 704</Contact>
                    <Contact>Poznań, Wielkopolska</Contact>

                    <ContactLink href="https://www.facebook.com/showfarm.kennel">Znajdziesz nas również na
                        Facebook! <FacebookIcon src={facebook}/></ContactLink>
                </Card>
            </CardWrapper>
        </Layout>
    )
};

export default ContactPage
