import React from 'react';
import styled from "styled-components";
import Separator from "../separator/separator";
import {theme} from "static/layout/theme";
import {CardWrapper} from "./card-shared";
import {HoverAnimationStyle} from "../animation/animation";

const CardStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  margin: 1rem 1rem;
`;

const Top = styled.div`  
  flex: 2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  ${theme.media.deviceSize.tablet} {
    flex-direction: row;
    height: auto;
  }
`;

const TopText = styled(HoverAnimationStyle)`  
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: ${theme.colors.backgroundColor};
  padding: 4rem 1rem;
  
  margin: 0.5rem; 
  box-shadow: ${theme.effects.shadow};
`;

const Name = styled.div`  
  font-size: 2rem;
  color: ${theme.colors.fontColorGray};
  text-shadow: ${theme.effects.shadow};
`;

const FullName = styled.div`  
  white-space: pre-wrap;
`;

const CardImg = styled(HoverAnimationStyle)`  
  flex: 0 0 50%;
  
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
 margin: 0.5rem; 
  box-shadow: ${theme.effects.shadow};
`;

const Bottom = styled.div`  
  flex: 3;
  flex-basis: 100vh;
  display: flex;
  flex-direction: column;
  
  height: 100vh;
  
  ${theme.media.deviceSize.tablet} {
    flex-basis: 50vh;
    flex-direction: row-reverse;
    height: auto;
  }
`;

const BottomText = styled(HoverAnimationStyle)`  
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 1rem;
  
  white-space: pre-wrap;
  background-color: ${theme.colors.backgroundColor};
  
  margin: 0.5rem; 
  box-shadow: ${theme.effects.shadow};
`;

const CardFourParts = (props) => (
    <CardWrapper>
        <CardStyle>
            <Top>
                <CardImg imgUrl={props.topImage} showDelay={0.5}/>
                <TopText showDelay={0.3}>
                    <Name>{props.title}</Name>
                    <Separator color={theme.colors.detailColor}/>
                    <FullName>{props.subTitle}</FullName>
                </TopText>
            </Top>
            <Bottom>
                <CardImg imgUrl={props.bottomImage} showDelay={0.6}/>
                <BottomText showDelay={0.4} >{props.description}</BottomText>
            </Bottom>
        </CardStyle>
    </CardWrapper>
);

export default CardFourParts;
