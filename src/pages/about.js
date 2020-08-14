import React from "react";
import Layout from "static/layout/layout";
import styled from "styled-components";

import AboutCard from "src/components/cards/about-card/about-card";
import CardTreeParts from "src/components/cards/cardTreeParts";

import cardOneBig from "static/images/about/card-1-big.jpg";
import cardOneSmall from "static/images/about/card-1-small.jpg";
import cartTwoSmall from "static/images/about/card-2-small.jpg";
import cardTwoBig from "static/images/about/dzialonas.jpg";
import cardTreeSmall from "static/images/about/card-3-small.jpg";
import cardThreeMediumX from "static/images/about/card-3-medium.jpg";
import cardThreeBig from "static/images/about/card-3-big.jpg";
import MetaData from "../components/meta-data/meta-data";


const AboutWrapper = styled.div`  
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem
`;

const AboutPage = () => {
    return (
        <>
            <Layout>
                <MetaData
                    title={"Showfarm | O nas - frisbee, dogoterapia, pasterstwo"}
                    description={"Psy od dogoterapii, kochają frisbee czy agility oraz posadają instynkt pasterski"}/>
                <AboutWrapper>
                    <CardTreeParts
                        showDelay={0.2}
                        smallImg={cardOneSmall}
                        bigImg={cardOneBig}
                        direction={`column-reverse`}
                        description={`Owczarki australijskie są kochanymi członkami rodziny, które uwielbiają aktywność i pracę z człowiekiem. Psy z naszej hodowli są bardzo uniwersalne, gdyż sprawdzają się w takich sportach jak frisbee czy agility.`}/>
                    <CardTreeParts
                        showDelay={0.4}
                        smallImg={cartTwoSmall}
                        bigImg={cardTwoBig}
                        direction={`column`}
                        description={`Wiele psów z naszej hodowli spróbowało pasienia i pokazało, że psy od nas mają instynkt pasterski. Potrafią być niesamowitymi kompanami w stajennym życiu. Fantastycznie sprawdzają się podczas wspólnego biegania czy wycieczki rowerowej.`}/>
                    <AboutCard
                        smallImg={cardTreeSmall}
                        mediumImg={cardThreeMediumX}
                        bigImg={cardThreeBig}
                        description={`Miło mi też poinformować, że psy od nas pracują również w dogoterapii! Nasze psy mają różne epizody w telewizji jak granie w spotach reklamowych czy branie udziału w psich eventach.`}/>
                </AboutWrapper>
            </Layout>
        </>
    )
};

export default AboutPage
