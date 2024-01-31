import React, { ChangeEvent } from 'react';
import { useContext } from 'react';
import { SetTemplateContext } from '../contexts/TemplateContext';
import styled from 'styled-components';
import { readBptFile } from '../utils/BptFileReader';

const MyBar = styled.div`
    border-radius: 8px;
    padding: 1em;
    border: 1px solid gray;
`;

export const Toolbar: React.FC = () => {
    
    const setTemplate = useContext(SetTemplateContext);

    const onInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const fileList = event.target?.files;
        const bptFile = fileList?.item(0);

        if (!bptFile)
        {
            return;
        }

        readBptFile(bptFile)
            .then((template) => setTemplate(template))
            .catch(e => console.log(e))
        ;
    }

    return <>
        <MyBar>
            <input type='file' onChange={onInput} />
        </MyBar>
    </>;
};
