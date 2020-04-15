import React from 'React';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme";

const Line = styled.div`
   background-color: ${theme.colors.darkGold};
   width: 10rem;
   height: 2px;
   margin: 1rem;
`;

const Separator = () => {
    return (
        <>
            <Line/>
        </>
    )
};

export default Separator;
