import React from "react"
import Layout from "static/layout/layout";
import CardTreeParts from "../components/cards/cardTreeParts";
import styled from "styled-components";
import cardOneBig from "static/images/about/card-1-big.jpg"
import cardOneSmall from "static/images/about/card-1-small.jpg"

const Space = styled.div`
flex: ${({flexSize}) => flexSize};
`;

const AboutWrapper = styled.div`  
  display: flex;
  flex-direction: row;
`;

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <AboutWrapper>
                    <Space flexSize={1}/>
                    <CardTreeParts smallImg={cardOneSmall}
                                   bigImg={cardOneBig}
                                   description={`Psy z naszej hodowli są kochanymi członkami rodziny, które kochają aktywność i pracę z człowiekiem! Owczarki od nas są bardzo uniwersalne gdyż sprawdzają się w psich sportach jak frisbee czy agility.Miło mi też poinformować, że psy od nas pracują również w dogoterapii! Nasze psy mają różne epizody w telewizji jak granie w spotach reklamowych czy branie udziału w psich eventach.`}/>
                </AboutWrapper>
            </Layout>
        </div>
    )
};

export default AboutPage
