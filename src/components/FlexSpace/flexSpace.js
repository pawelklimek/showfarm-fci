import React from 'react';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme";

const FlexSpaceStyle = styled.div`
   flex: ${({flexSize}) => flexSize};
`;

const FlexSpace = (props) => {
    return (
        <FlexSpaceStyle flexSize={props.flexSize}/>
    )
};

export default FlexSpace;
