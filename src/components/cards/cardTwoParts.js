import React from 'react';
import styled from "styled-components";
import Separator from "../separator/separator";
import {theme} from "static/layout/theme";
import {CardWrapper} from "./card-shared";
import {HoverAnimationStyle} from "../animation/animation";

const CardStyle = styled(HoverAnimationStyle)`
  flex: 1;
  display: flex;
  height: 100vh;
  flex-direction: column;
  ${theme.media.deviceSize.laptop} {
    flex-direction: row;
    height: auto;
  }
  margin: 1rem 1rem;
  
    box-shadow: ${theme.effects.shadow};
`;

const TopText = styled.div`  
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  padding: 2rem 1rem;
  
  background-color: ${theme.colors.backgroundColor};
`;

const Name = styled.div`  
  font-size: 2rem;
  text-shadow: ${theme.effects.shadow};
`;

const FullName = styled.div`  
  white-space: pre-wrap;
`;

const CardImg = styled.div`  
  flex: 0 0 50%;
  
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardTwoParts = (props) => (
    <CardWrapper>
        <CardStyle showDelay={0.2}>
            <CardImg imgUrl={props.imgUrl}/>
            <TopText>
                <Name>{props.title}</Name>
                <Separator color={theme.colors.detailColor}/>
                <FullName>{props.subTitle}</FullName>
            </TopText>
        </CardStyle>
    </CardWrapper>
);
export default CardTwoParts;
