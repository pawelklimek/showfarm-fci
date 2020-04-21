import React from 'React';
import styled from "styled-components";
import {theme} from "static/layout/theme";

const HeaderImage = styled.div`
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  height: 50%;
  
  ${theme.media.desktop}{
    background-position: center;
  }
`;

const MainImage = (props) => {
    return (
        <HeaderImage imgUrl={props.imgUrl}>
        </HeaderImage>
    )
};

export default MainImage;
