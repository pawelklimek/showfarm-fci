import React from "react";
import styled from "styled-components";
import pic0 from "static/images/gallery/0.jpg"
import pic1 from "static/images/gallery/1.jpg";
import pic2 from "static/images/gallery/2.jpg";
import pic3 from "static/images/gallery/3.jpg";
import pic4 from "static/images/gallery/4.jpg";
import pic5 from "static/images/gallery/5.jpg";
import pic6 from "static/images/gallery/6.jpg";
import pic7 from "static/images/gallery/7.jpg";
import pic8 from "static/images/gallery/8.jpg";
import pic9 from "static/images/gallery/9.jpg";
import pic10 from "static/images/gallery/10.jpg";
import pic11 from "static/images/gallery/11.jpg";
import pic12 from "static/images/gallery/12.jpg";
import pic13 from "static/images/gallery/13.jpg";
import pic14 from "static/images/gallery/14.jpg";
import pic15 from "static/images/gallery/15.jpg";
import pic16 from "static/images/gallery/16.jpg";
import pic17 from "static/images/gallery/17.jpg";
import pic18 from "static/images/gallery/18.jpg";
import pic19 from "static/images/gallery/19.jpg";
import pic20 from "static/images/gallery/20.jpg";
import pic21 from "static/images/gallery/21.jpg";
import pic22 from "static/images/gallery/22.jpg";
import pic23 from "static/images/gallery/23.jpg";
import pic24 from "static/images/gallery/24.jpg";

import Layout from "static/layout/layout";
import {theme} from "static/layout/theme";
import {HoverAnimationStyle} from "src/components/animation/animation";
import MetaData from "../components/meta-data/meta-data";

const ImageMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  ${theme.media.deviceSize.laptop} {
    flex-direction: row;
    margin: 1rem;
  }
`;

const Image = styled(HoverAnimationStyle)`
  width:90vw;
  height: 50vh;

  margin: 0.5rem;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({src}) => src});
  background-position: center;  
  
  cursor: pointer;
  filter: grayscale(100%);
  box-shadow: ${theme.effects.shadow};
  :hover {
    filter: grayscale(0%);
  }
 
  ${theme.media.deviceSize.laptop} {
    width: 50px;
    height: 50px;
    margin: 0.2rem;
  }
`;

const ImageSelected = styled(HoverAnimationStyle)`
  ${theme.media.deviceSize.laptop} {
  height: 75vh;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({src}) => src});
  background-position: center;  
  margin: 1rem  2rem;
  
  box-shadow: ${theme.effects.shadow};
  }
`;

class Gallery extends React.Component {
    state = {
        selectedImage: pic1
    };

    clickedValue = (value) => this.setState({selectedImage: value});

    render() {
        return (<Layout>
            <MetaData
                title={"Showfarm - Galeria"}
                description={"Zdjęcia owczarek amerykański owczarek miniaturowy amerykański, blue merle, triple black"}/>
            <ImageMenu>
                <Image showDelay={0.0} src={pic0} onClick={() => this.clickedValue(pic0)}/>
                <Image showDelay={0.1} src={pic1} onClick={() => this.clickedValue(pic1)}/>
                <Image showDelay={0.2} src={pic2} onClick={() => this.clickedValue(pic2)}/>
                <Image showDelay={0.3} src={pic3} onClick={() => this.clickedValue(pic3)}/>
                <Image showDelay={0.4} src={pic4} onClick={() => this.clickedValue(pic4)}/>
                <Image showDelay={0.5} src={pic5} onClick={() => this.clickedValue(pic5)}/>
                <Image showDelay={0.6} src={pic6} onClick={() => this.clickedValue(pic6)}/>
                <Image showDelay={0.7} src={pic7} onClick={() => this.clickedValue(pic7)}/>
                <Image showDelay={0.8} src={pic8} onClick={() => this.clickedValue(pic8)}/>
                <Image showDelay={0.9} src={pic9} onClick={() => this.clickedValue(pic9)}/>
                <Image showDelay={1.0} src={pic10} onClick={() => this.clickedValue(pic10)}/>
                <Image showDelay={1.1} src={pic11} onClick={() => this.clickedValue(pic11)}/>
                <Image showDelay={1.2} src={pic12} onClick={() => this.clickedValue(pic12)}/>
                <Image showDelay={1.2} src={pic13} onClick={() => this.clickedValue(pic13)}/>
                <Image showDelay={1.3} src={pic14} onClick={() => this.clickedValue(pic14)}/>
                <Image showDelay={1.4} src={pic15} onClick={() => this.clickedValue(pic15)}/>
                <Image showDelay={1.5} src={pic16} onClick={() => this.clickedValue(pic16)}/>
                <Image showDelay={1.6} src={pic17} onClick={() => this.clickedValue(pic17)}/>
                <Image showDelay={1.7} src={pic18} onClick={() => this.clickedValue(pic18)}/>
                <Image showDelay={1.8} src={pic19} onClick={() => this.clickedValue(pic19)}/>
                <Image showDelay={1.9} src={pic20} onClick={() => this.clickedValue(pic20)}/>
                <Image showDelay={2.0} src={pic21} onClick={() => this.clickedValue(pic21)}/>
                <Image showDelay={2.1} src={pic22} onClick={() => this.clickedValue(pic22)}/>
                <Image showDelay={2.2} src={pic23} onClick={() => this.clickedValue(pic23)}/>
                <Image showDelay={2.3} src={pic24} onClick={() => this.clickedValue(pic24)}/>
            </ImageMenu>
            <ImageSelected showDelay={2} src={this.state.selectedImage}/>
        </Layout>)
    }
}

export default Gallery
