import React from 'react';
import styled from 'styled-components';

const StartElement = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    line-height: 50px;
    text-align: center;
    background: green;
    font-size: 30px;
    color: white;
    margin: 0 auto;
`;

export const Start: React.FC = () => {

    return (
        <StartElement>
            <span>▶︎</span>
        </StartElement>
    );
}
