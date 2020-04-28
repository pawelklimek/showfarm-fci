import React from "react"
import styled from "styled-components";
import Layout from "static/layout/layout";
import Separator from "src/components/separator/separator"
import {theme} from "../../static/layout/theme";

const Header = styled.div`
  text-shadow: ${theme.effects.shadow};
  font-size: 2rem;
  font-weight: 200;
`;

const Card = styled.div`
  color: ${theme.colors.fontColorGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.backgroundColor};
  box-shadow: ${theme.effects.shadow};
  ${theme.effects.animation.entranceRight};
  padding: 1rem;
`;

const Contact = styled.div`
   text-decoration: none;
   margin: 2px;
   text-align: center;
   color: ${theme.colors.fontColorGray};
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

const ContentWrapper = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;

height: 100%;
`;

const ContactPage = () => {
    return (
        <>
            <Layout>
                <ContentWrapper>
                    <Card>
                        <Header>KONTAKT</Header>
                        <Separator color={theme.colors.darkGold}/>
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
                </ContentWrapper>
            </Layout>
        </>
    )
};

export default ContactPage
