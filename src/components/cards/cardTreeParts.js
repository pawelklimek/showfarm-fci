import React from 'React';
import styled from "styled-components";
import {theme} from "static/layout/theme";
import {CardWrapper} from "./card-shared";


const CardStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
  ${theme.effects.animation.entranceRight};
  box-shadow: ${theme.effects.shadow};
`;

const Left = styled.div`  
  display: flex;
  background-color: red;
`;

const Right = styled.div`  
background-color: rebeccapurple;
  display: flex;
  flex-direction: column;
`;

const TopText = styled.div`  
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.backgroundColor};
  padding: 4rem 1rem;
`;

const Description = styled.div`  
  color:  ${theme.colors.fontColorGray};
  white-space: pre-wrap;
`;

const BigImg = styled.div`  
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

const CardTreeParts = (props) => {
    return (
        <CardWrapper>
            <CardStyle>
                <Left>
                    <BigImg imgUrl={props.smallImg}/>
                </Left>
                <Right>
                    <SmallImg imgUrl={props.bigImg}/>
                    <TopText>
                        <Description>{props.description}</Description>
                    </TopText>
                </Right>
            </CardStyle>
        </CardWrapper>
    )
};

export default CardTreeParts;
