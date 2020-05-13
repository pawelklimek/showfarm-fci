import React from "react";
import Layout from "static/layout/layout";
import styled from "styled-components";
import bigImg from "static/images/showfarm/big-img.jpg";
import topImg from "static/images/showfarm/dogs.jpg";
import certificationFCI from "static/images/showfarm/FCI.png";
import certificationZK from "static/images/showfarm/ZK.png";
import CardFourParts from "src/components/cards/cardFourParts";
import { theme } from "static/layout/theme";
import { HoverAnimationStyle } from "src/components/animation/animation";

const PageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column-reverse;
  justify-content: center;
  align-items: center;
  
 ${theme.media.deviceSize.laptop} {
   flex-direction:row;
 }
`;

const Left = styled.div`
`;

const Right = styled.div`
flex: 2;
`;

const Circle = styled(HoverAnimationStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  width: 20vh;
  height:20vh;
  
  margin: 1rem;
  border-radius: 50%;
  
  background-color: ${theme.colors.backgroundColor};
  box-shadow: ${theme.effects.shadow}
`;
const CertificationLogoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${theme.media.deviceSize.laptop} {
    flex-direction: column;
  }
`;

const CertificationLogo = styled.div`
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
`;

const IndexPage = () => {
    return (
        <Layout>
            <PageContent>
                <Left>
                    <CertificationLogoWrapper>
                        <Circle showDelay={0.2}>
                            <CertificationLogo imgUrl={certificationFCI} />
                        </Circle>
                        <Circle showDelay={0.4}>
                            <CertificationLogo imgUrl={certificationZK}/>
                        </Circle>
                    </CertificationLogoWrapper>
                </Left>
                <Right>
                    <CardFourParts showDelay={0.6}
                        title={"SHOWFARM FCI"}
                        subTitle={`Owczarek Australijski\nMiniaturowy Owczarek Amerykański`}
                        description={`Showfarm FCI to mała domowa hodowla owczarków australijskich, która od lat nierozłącznie wiąże się z miłością i pasją do psów. Wszystkie psy z naszej hodowli są pełnoprawnymi członkami rodziny, które mieszkają z nami i towarzyszą nam w życiu codziennym. Założycielką hodowli jestem ja, czyli Karolina Klimek. Prowadzę hodowlę w asyście doświadczonych koleżanek - Magdaleny Sołtysiak oraz Celiny Grundland. Połączyła nas miłość do owczarków, stąd wspólne dążenie do tego, aby psy pochodzące z naszej hodowli były nie tylko zdrowe i piękne, ale przede wszystkim miały zrównoważone charaktery i były kochanymi członkami rodziny!`}
                        topImage={topImg}
                        bottomImage={bigImg}/>
                </Right>
            </PageContent>
        </Layout>
    )
};

export default IndexPage
