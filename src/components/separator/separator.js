import React from 'React';
import styled from "styled-components";
import {theme} from "../../../static/layout/theme";

const SeparatorStyle = styled.div`
   background-color: ${theme.colors.darkGold};
   width: 10rem;
   height: 2px;
   margin: 1rem 0;
`;

const Separator = () => {
    return (
        <>
            <SeparatorStyle/>
        </>
    )
};

export default Separator;
