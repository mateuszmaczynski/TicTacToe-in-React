import React from "react";
import styled from "styled-components";

const Board = styled.div`
    display: grid;
    grid-template: repeat(3, 60px) / repeat(3, 60px);
    grid-gap: 8px 8px;
`;

const BoardComponent  = ({children}) => (
    <Board>
        {children}
    </Board>
);

export default BoardComponent

