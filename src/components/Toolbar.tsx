import React, { ChangeEvent } from 'react';
import { useContext } from 'react';
import { TemplateContext, SetTemplateContext } from '../contexts/TemplateContext';

import styled from 'styled-components';

const MyBar = styled.div`
    border-radius: 8px;
    padding: 1em;
    border: 1px solid gray;
`;

require('php-unserialize');
declare global {
  interface Window {
    PHPUnserialize?: any;
  }
}

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

                const template = window.PHPUnserialize.unserialize(bptContent);
                
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