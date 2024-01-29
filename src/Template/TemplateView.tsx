import React from 'react';
import { useContext } from 'react';
import { TemplateContext } from './TemplateContext';

export const TemplateView: React.FC = () => {

    const template = useContext(TemplateContext);

    return <>
        <p>
            {JSON.stringify(template, undefined, 2)}
        </p>
    </>;

}
