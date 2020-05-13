import React from "react";
import styled from "styled-components";
import Layout from "static/layout/layout";
import Separator from "src/components/separator/separator"
import {theme} from "static/layout/theme";
import {HoverAnimationStyle} from "src/components/animation/animation";

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
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    color: ${theme.colors.fontColorGray};

    &:hover {
      color: #3b5998;
    }
`;

const CardWrapper = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;

padding: 0 1rem;
height: 100%;
`;

const ContactPage = () => {
    return (
            <Layout>
                <CardWrapper>
                    <Card showDelay={0.2}>
                        <Header>KONTAKT</Header>
                        <Separator color={theme.colors.detailColor}/>
                        <Contact>Serdecznie zapraszamy do kontaktu!</Contact>
                        <Contact> Zawsze chętnie udzielimy wszelakich informacji na temat naszych psów.</Contact>
                        <br/>
                        <Contact>Założycielka hodowli: Karolina Klimek</Contact>
                        <Contact as={'a'} href="mailto:showfarm.kennel@gmail.com">showfarm.kennel@gmail.com</Contact>
                        <Contact>+48 509 354 704</Contact>
                        <ContactLink href="https://www.facebook.com/showfarm.kennel">Facebook</ContactLink>
                        <br/>
                        <Contact>Poznań</Contact>
                    </Card>
                </CardWrapper>
            </Layout>
    )
};

export default ContactPage
