import React from 'react';
import { useContext } from 'react';
import { TemplateContext } from '../contexts/TemplateContext';
import { Activity } from '../components/Activity';

export const Template: React.FC = () => {

    const template = useContext(TemplateContext);
    console.log(template);

    const activities = template?.TEMPLATE;

    return <>
        {activities?.map(activity => <Activity key={activity.Name} activity={activity}></Activity>)}
    </>;
}
