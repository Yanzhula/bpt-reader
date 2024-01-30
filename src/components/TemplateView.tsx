import React from 'react';
import { useContext } from 'react';
import { TemplateContext } from '../contexts/TemplateContext';

export const TemplateView: React.FC = () => {

    const template = useContext(TemplateContext);

    return <>
        <h3>Template data</h3>
        <pre>
            {JSON.stringify(template, undefined, 2)}
        </pre>
    </>;

}
