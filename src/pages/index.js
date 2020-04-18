import React from "react"
import Layout from "static/layout/layout"
import styled from "styled-components";
import titleImg from "static/images/showfarm/showfarm-title.jpg"
import bigImg from "static/images/showfarm/big-img.jpg"
import certificationFCI from "static/images/showfarm/FCI.png"
import certificationZK from "static/images/showfarm/ZK.png"
import {theme} from "static/layout/theme";

const HeaderImage = styled.div`
  background-image: url(${titleImg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  height: 50%;
  
  ${theme.media.desktop} {
    background-position: center;
  }
`;

const PageContent = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const BigImage = styled.div`
  margin: 2rem 1rem 2rem 2rem;
  position: relative;
  background-image: url(${bigImg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  height: 30rem;
`;

const Content = styled.div`  
  margin: 2rem 2rem 2rem 1rem;
  flex: 1;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-self: self-start;`;

const Title = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #b29a36;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.div`
  color: ${theme.colors.darkGold};
  font-size: 2rem;
`;

const SubTitle = styled.div`
  color: ${theme.colors.darkGold};
`;

const Description = styled.div`
  padding: 1rem;
  font-weight: 100;
  text-align: center;
`;

const CertificationLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height:10rem;
`;

const CertificationLogo = styled.div`
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 50%;
`;

const IndexPage = () => {
    return (
        <Layout>
            <HeaderImage/>
            <PageContent>
                <ImageWrapper>
                    <BigImage/>
                </ImageWrapper>
                <Content>
                    <Title>
                        <MainTitle>Showfarm FCI</MainTitle>
                        <SubTitle>Owczarek Australijski </SubTitle>
                        <SubTitle>Miniaturowy Owczarek Amerykański</SubTitle>
                    </Title>
                    <Description> Showfarm FCI to mała domowa hodowla owczarków australijskich,
                        która nierozłącznie wiąże się z miłością i pasją do psów. Wszystkie psy z naszej hodowli są
                        pełnoprawnymi członkami rodziny, które mieszkają z nami i towarzyszą nam w życiu codziennym.
                        Założycielką hodowli jestem ja, czyli Karolina Klimek. Prowadzę hodowlę w asyście
                        doświadczonych koleżanek - Magdaleny Sołtysiak oraz Celiny Grundland. Połączyła nas miłość
                        do owczarków, stąd wspólne dążenie do tego, aby psy pochodzące z naszej hodowli były nie
                        tylko zdrowe i piękne, ale przede wszystkim miały zrównoważone charaktery i były kochanymi
                        członkami rodziny!</Description>
                    <CertificationLogoWrapper>
                        <CertificationLogo imgUrl={certificationFCI}/>
                        <CertificationLogo imgUrl={certificationZK}/>
                    </CertificationLogoWrapper>
                </Content>
            </PageContent>
        </Layout>
    )
};

export default IndexPage
