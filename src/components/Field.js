import React from "react";
import styled from "styled-components";

const Field = styled.div`
    border: 2px solid;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FieldComponent = ({sign = '', onClick}) => {
    return (
        <Field onClick={onClick}>
            { sign }
        </Field>
    );
}

export default FieldComponent