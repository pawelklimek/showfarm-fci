import React from 'React';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme";

const SeparatorStyle = styled.div`
   background-color: ${({color}) => color};
   width: 10rem;
   height: 2px;
   margin: 1rem 0;
   box-shadow:  ${theme.effects.shadow};
`;

const Separator = (props) => {
    console.log(props.color);
    return (
        <SeparatorStyle color={props.color}/>
    )
};

export default Separator;
