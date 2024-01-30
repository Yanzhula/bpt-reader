import React, { ChangeEvent } from 'react';
import { useContext } from 'react';
import { TemplateContext, SetTemplateContext } from '../contexts/TemplateContext';

import styled from 'styled-components';

const MyBar = styled.div`
    border-radius: 8px;
    padding: 1em;
    border: 1px solid gray;
`;

const phpUnserialize = require('phpunserialize');

export const Toolbar: React.FC = () => {
    
    const setTemplate = useContext(SetTemplateContext);

    const onInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const fileList = event.target?.files;
        const bptFile = fileList?.item(0);

        if (!bptFile)
        {
            return;
        }

        const ds = new DecompressionStream('deflate');
        const decompressedStream = bptFile.stream().pipeThrough(ds);

        (new Response(decompressedStream)).text().then(
            (bptContent) => {

                const template = phpUnserialize(bptContent);
                
                console.log(template);
                setTemplate(template);
            },
        ).catch(e => console.log(e));
    }

    return <>
        <MyBar>
            <input type='file' onChange={onInput} />
        </MyBar>
    </>;
};