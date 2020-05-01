import React from 'react';
import styled from "styled-components";
import {theme} from "static/layout/theme";

const CardStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media ${theme.media.deviceSize.laptop} {
    flex-direction: row;
  }
  margin: 1rem 1rem;
  
  
  ${theme.effects.animation.entranceRight};
  box-shadow: ${theme.effects.shadow};
`;

const Left = styled.div`  
  flex: 1;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  
  height: 100vh;
  @media ${theme.media.deviceSize.laptop} {
    height: 75vh;
  }
`;

const Right = styled.div`  
  flex: 1;
  display: flex;
  flex-direction: ${({direction}) => direction === 'column-reverse' ? 'column-reverse' : 'column'};
 
  height: 75vh;
`;

const RightBottom = styled.div`  
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
 
  background-color: ${theme.colors.backgroundColor};
`;

const Description = styled.div`  
  align-self: center;
  
  padding: 1rem 1rem;
  color:  ${theme.colors.fontColorGray};
  white-space: pre-wrap;
`;

const BigImg = styled.div`  
  flex: 0 0 100%;
  
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

const MediumImg = styled.div`  
  flex: 0 0 50%;
  
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

const SmallImg = styled.div`  
  flex: 0 0 50%;
  
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardTreeXParts = (props) => {
    return (
        <CardStyle>
            <Left>
                <BigImg imgUrl={props.bigImg}/>
            </Left>
            <Right direction={props.direction}>
                <MediumImg imgUrl={props.mediumImg}/>
                <RightBottom>
                    <Description>{props.description}</Description>
                    <SmallImg imgUrl={props.smallImg}/>
                </RightBottom>
            </Right>
        </CardStyle>
    )
};

export default CardTreeXParts;
