import React from 'React';
import styled from "styled-components";
import Separator from "../separator/separator";

const TitleStyle = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = (props) => {
    return (
        <TitleStyle>
            <h1>{props.title}</h1>
            <Separator/>
        </TitleStyle>
    )
};

export default Title;
