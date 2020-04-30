import React from "react"
import styled from "styled-components"
import pic1 from "static/images/gallery/1.jpg"
import pic2 from "static/images/gallery/2.jpg"
import pic3 from "static/images/gallery/3.jpg"
import pic4 from "static/images/gallery/4.jpg"
import pic5 from "static/images/gallery/5.jpg"
import pic6 from "static/images/gallery/6.jpg"
import pic7 from "static/images/gallery/7.jpg"
import pic8 from "static/images/gallery/8.jpg"
import pic9 from "static/images/gallery/9.jpg"
import pic10 from "static/images/gallery/10.jpg"
import pic11 from "static/images/gallery/11.jpg"
import pic12 from "static/images/gallery/12.jpg"
import pic13 from "static/images/gallery/13.jpg"
import pic14 from "static/images/gallery/14.jpg"
import pic15 from "static/images/gallery/15.jpg"
import pic16 from "static/images/gallery/16.jpg"
import pic17 from "static/images/gallery/17.jpg"
import pic18 from "static/images/gallery/18.jpg"
import pic19 from "static/images/gallery/19.jpg"
import pic20 from "static/images/gallery/20.jpg"
import Layout from "static/layout/layout";
import {theme} from "static/layout/theme";

const BackgroundStyle = styled.div`
  display: flex;
  flex-direction: column;
 
  height:  90%;
  width: 100%;
`;

const WrapperRow = styled.div`
  display: flex;
  justify-content: center;
 
  margin: 1rem;
  height: 100%;
`;

const Image = styled.div`
  width:5%;
  height: 100%;
 
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({src}) => src});
  background-position: center;
 
  box-shadow: ${theme.effects.shadow}; 

  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1)
    ${({showDelay}) => showDelay}s both;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  transition: all 500ms;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  transition-delay: 2s;
  -webkit-transition: width 500ms;
  -moz-transition: width 500ms;
  :hover {
    filter: grayscale(0%);
    width: 100%;
  }
`;

const GalleryPage = () => (
    <Layout>
        <BackgroundStyle>
            <WrapperRow>
                <Image showDelay={0.1} src={pic1}/>
                <Image showDelay={0.2} src={pic2}/>
                <Image showDelay={0.3} src={pic3}/>
                <Image showDelay={0.4} src={pic4}/>
                <Image showDelay={0.5} src={pic5}/>
                <Image showDelay={0.6} src={pic6}/>
                <Image showDelay={0.7} src={pic7}/>
                <Image showDelay={0.8} src={pic8}/>
                <Image showDelay={0.9} src={pic9}/>
                <Image showDelay={1.0} src={pic10}/>
                <Image showDelay={1.1} src={pic11}/>
                <Image showDelay={1.2} src={pic12}/>
                <Image showDelay={1.2} src={pic13}/>
                <Image showDelay={1.3} src={pic14}/>
                <Image showDelay={1.4} src={pic15}/>
                <Image showDelay={1.5} src={pic16}/>
                <Image showDelay={1.6} src={pic17}/>
                <Image showDelay={1.7} src={pic18}/>
                <Image showDelay={1.8} src={pic19}/>
                <Image showDelay={1.9} src={pic20}/>
            </WrapperRow>
        </BackgroundStyle>
    </Layout>
);

export default GalleryPage
