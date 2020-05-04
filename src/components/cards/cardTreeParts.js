import React from 'react';
import styled from "styled-components";
import {theme} from "static/layout/theme";
import {HoverAnimationStyle} from "../animation/animation";

const CardStyle = styled(HoverAnimationStyle)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${theme.media.deviceSize.laptop} {
    flex-direction: row;
  }
  margin: 1rem 1rem;
`;

const Left = styled.div`  
  flex: 1;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 75vh;
 
  margin:  0 0.5rem; 
`;

const Right = styled.div`  
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  
  ${theme.media.deviceSize.laptop} {
    flex-direction: ${({direction}) => direction === 'column-reverse' ? 'column-reverse' : 'column'};
  }
 
  height: 75vh;
`;

const TopText = styled.div`  
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  padding: 1rem 1rem;
  
  background-color: ${theme.colors.backgroundColor};
 
  margin:  ${({direction}) => direction === 'column' ? "0.5rem 0 0 0.5rem" :  "0 0 0.5rem 0.5rem"};
  box-shadow: ${theme.effects.shadow};
`;

const Description = styled.div`  
  white-space: pre-wrap;
`;

const BigImg = styled.div`  
  flex: 0 0 100%;
 
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: ${theme.effects.shadow};
`;

const SmallImg = styled.div`  
  flex: 1 1 50%;
 
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;

  margin:  ${({direction}) => direction === 'column' ? "0 0 0.5rem 0.5rem" :  "0.5rem 0 0 0.5rem"};

  box-shadow: ${theme.effects.shadow};
`;

const CardTreeParts = (props) => (
    <CardStyle showDelay={props.showDelay}>
        <Left>
            <BigImg imgUrl={props.bigImg}/>
        </Left>
        <Right direction={props.direction}>
            <SmallImg imgUrl={props.smallImg} direction={props.direction}/>
            <TopText  direction={props.direction}>
                <Description>{props.description}</Description>
            </TopText>
        </Right>
    </CardStyle>
);

export default CardTreeParts;
