import React from "react"
import Layout from "static/layout/layout";
import CardFourParts from "src/components/cards/cardFourParts";
import {Dogs} from "static/dogs";
import DogScrollNavi from "src/components/dog-scroll-navi/dog-scroll-navi";
import styled from "styled-components";
import {theme} from "../../static/layout/theme";

const DogCardWrapper = styled.div`  
  display: flex;
`;

const Left = styled.div`  
  ${theme.media.deviceSize.laptop} {
    flex: 1;
  } 
`;
const Right = styled.div`  
  flex: 2;
`;

const DogsPage = () => {
    return (
        <div>
            <Layout>
                <DogCardWrapper>
                    <DogScrollNavi/>
                    <Left/>
                    <Right>
                        <div id='joy'/>
                        <CardFourParts
                            showDelay={0.4}
                            title={Dogs.Joy.name}
                            subTitle={Dogs.Joy.fullName}
                            description={Dogs.Joy.description}
                            topImage={Dogs.Joy.topImage}
                            bottomImage={Dogs.Joy.bottomImg}>
                        </CardFourParts>
                        <div id='dora'/>
                        <CardFourParts
                            showDelay={0.6}
                            title={Dogs.Dora.name}
                            subTitle={Dogs.Dora.fullName}
                            description={Dogs.Dora.description}
                            topImage={Dogs.Dora.topImage}
                            bottomImage={Dogs.Dora.bottomImg}/>
                        <div id='maizy'/>
                        <CardFourParts
                            showDelay={0.8}
                            title={Dogs.Maizy.name}
                            subTitle={Dogs.Maizy.fullName}
                            description={Dogs.Maizy.description}
                            topImage={Dogs.Maizy.topImage}
                            bottomImage={Dogs.Maizy.bottomImg}/>
                        <div id='mora'/>
                        <CardFourParts
                            showDelay={1}
                            title={Dogs.Mora.name}
                            subTitle={Dogs.Mora.fullName}
                            description={Dogs.Mora.description}
                            topImage={Dogs.Mora.topImage}
                            bottomImage={Dogs.Mora.bottomImg}/>
                        <div id='abi'/>
                        <CardFourParts
                            showDelay={1.2}
                            title={Dogs.Abi.name}
                            subTitle={Dogs.Abi.fullName}
                            description={Dogs.Abi.description}
                            topImage={Dogs.Abi.topImage}
                            bottomImage={Dogs.Abi.bottomImg}/>
                        <div id='jaga'/>
                        <CardFourParts
                            showDelay={1.4}
                            title={Dogs.Jaga.name}
                            subTitle={Dogs.Jaga.fullName}
                            description={Dogs.Jaga.description}
                            topImage={Dogs.Jaga.topImage}
                            bottomImage={Dogs.Jaga.bottomImg}/>
                        <div id='dakota'/>
                        <CardFourParts
                            showDelay={1.6}
                            title={Dogs.Dakota.name}
                            subTitle={Dogs.Dakota.fullName}
                            description={Dogs.Dakota.description}
                            topImage={Dogs.Dakota.topImage}
                            bottomImage={Dogs.Dakota.bottomImg}/>
                        <div id='ruby'/>
                        <CardFourParts
                            showDelay={1.8}
                            title={Dogs.Ruby.name}
                            subTitle={Dogs.Ruby.fullName}
                            description={Dogs.Ruby.description}
                            topImage={Dogs.Ruby.topImage}
                            bottomImage={Dogs.Ruby.bottomImg}/>
                        <div id='brag'/>
                        <CardFourParts
                            showDelay={2}
                            title={Dogs.Brag.name}
                            subTitle={Dogs.Brag.fullName}
                            description={Dogs.Brag.description}
                            topImage={Dogs.Brag.topImage}
                            bottomImage={Dogs.Brag.bottomImg}/>
                    </Right>
                </DogCardWrapper>
            </Layout>
        </div>
    )
};

export default DogsPage
