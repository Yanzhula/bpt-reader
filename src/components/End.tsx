import React from 'react';
import styled from 'styled-components';

const EndElement = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    line-height: 50px;
    text-align: center;
    background: red;
    font-size: 30px;
    color: white;
    margin: 0 auto;
`;

export const End: React.FC = () => {

    return (
        <EndElement>
            <span>❑</span>
        </EndElement>
    );
}
