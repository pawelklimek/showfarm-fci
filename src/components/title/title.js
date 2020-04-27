import React from 'React';
import styled from "styled-components";
import Separator from "../separator/separator";
import {theme} from "../../../static/layout/theme";

const TitleStyle = styled.h1`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  color:${theme.colors.fontColorGray};
  text-shadow: ${theme.effects.shadow};
`;

const Title = (props) => {
    return (
        <TitleStyle>
            {props.title}
            <Separator color={theme.colors.backgroundColor}/>
        </TitleStyle>
    )
};

export default Title;
