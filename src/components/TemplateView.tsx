import React from 'react';
import { useContext } from 'react';
import { TemplateContext } from '../contexts/TemplateContext';

export const TemplateView: React.FC = () => {

    const template = useContext(TemplateContext);

    return <>
        <pre>
            {template && JSON.stringify(template, undefined, 2)}
        </pre>
    </>;

}
