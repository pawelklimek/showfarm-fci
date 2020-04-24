import React from 'React';
import styled from "styled-components";
import Separator from "../separator/separator";

const TitleStyle = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 100;
`;

const Title = (props) => {
    return (
        <TitleStyle as={'H1'}>
            {props.title}
            <Separator/>
        </TitleStyle>
    )
};

export default Title;
