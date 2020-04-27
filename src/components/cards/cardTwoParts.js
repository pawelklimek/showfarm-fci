import React from 'React';
import styled from "styled-components";
import Separator from "../separator/separator";
import {theme} from "static/layout/theme";
import {CardWrapper} from "./card-shared";

const CardStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
  ${theme.effects.animation.entranceRight};
  box-shadow: ${theme.effects.shadow};
`

const TopText = styled.div`  
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.backgroundColor};
  padding: 3rem 1rem;
`;

const Name = styled.div`  
  font-size: 2rem;
  color:  ${theme.colors.fontColorGray};
  text-shadow: ${theme.effects.shadow};
  ${theme.effects.animation.text};
`;

const FullName = styled.div`  
  color:  ${theme.colors.fontColorGray};
  white-space: pre-wrap;
`;

const CardImg = styled.div`  
  flex: 0 0 50%;
  background-position: 50% 50%;
  background-image: url(${({imgUrl}) => imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardTwoParts = (props) => {
    return (
        <CardWrapper>
            <CardStyle>
                <CardImg imgUrl={props.imgUrl}/>
                <TopText>
                    <Name>{props.title}</Name>
                    <Separator color={theme.colors.darkGold}/>
                    <FullName>{props.subTitle}</FullName>
                </TopText>
            </CardStyle>
        </CardWrapper>
    )
};

export default CardTwoParts;
