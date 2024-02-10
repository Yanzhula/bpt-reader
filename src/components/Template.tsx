import React from 'react';
import { useContext } from 'react';
import { TemplateContext } from '../contexts/TemplateContext';
import { Activity } from '../components/Activity';
import { Start } from './Start';
import { End } from './End';

export const Template: React.FC = () => {

    const template = useContext(TemplateContext);
    console.log(template);

    const activities = template?.TEMPLATE;

    return <>
        {template && <Start/>}
        {activities?.map(activity => <Activity key={activity.Name} activity={activity}></Activity>)}
        {template && <End/>}
    </>;
}
