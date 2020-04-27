import React from "react"
import Layout from "static/layout/layout"
import styled from "styled-components";
import bigImg from "static/images/showfarm/big-img.jpg"
import topImg from "static/images/showfarm/dogs.jpg"
import certificationFCI from "static/images/showfarm/FCI.png"
import certificationZK from "static/images/showfarm/ZK.png"
import DogCard from "../components/dog-card/dog-card";

const PageContent = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
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
            <PageContent>
                <DogCard name={"SHOWFARM FCI"}
                         fullName={`Owczarek Australijski\nMiniaturowy Owczarek Amerykański`}
                         description={`Showfarm FCI to mała domowa hodowla owczarków australijskich, która nierozłącznie wiąże się z miłością i pasją do psów. Wszystkie psy z naszej hodowli są pełnoprawnymi członkami rodziny, które mieszkają z nami i towarzyszą nam w życiu codziennym. Założycielką hodowli jestem ja, czyli Karolina Klimek. Prowadzę hodowlę w asyście doświadczonych koleżanek - Magdaleny Sołtysiak oraz Celiny Grundland. Połączyła nas miłość do owczarków, stąd wspólne dążenie do tego, aby psy pochodzące z naszej hodowli były nie tylko zdrowe i piękne, ale przede wszystkim miały zrównoważone charaktery i były kochanymi członkami rodziny!`}
                         topImage={topImg}
                         bottomImage={bigImg}/>
                <CertificationLogoWrapper>
                    <CertificationLogo imgUrl={certificationFCI}/>
                    <CertificationLogo imgUrl={certificationZK}/>
                </CertificationLogoWrapper>
            </PageContent>
        </Layout>
    )
};

export default IndexPage
