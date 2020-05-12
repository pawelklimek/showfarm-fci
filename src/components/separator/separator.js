import React from 'react';
import styled from "styled-components";
import {theme} from "static/layout/theme";

const SeparatorStyle = styled.div`
   width: 10rem;
   height: 2px;
   
   margin: 1rem 0;
   
   background-color: ${({separatorColor}) => separatorColor};
   box-shadow: ${theme.effects.shadow};
`;

const Separator = (props) => {
    return (
        <SeparatorStyle separatorColor={props.color}/>
    )
};

export default Separator;
