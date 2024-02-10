import React from 'react';
import { TemplateActivityType } from '../types/Template';
import { styled, css } from 'styled-components';

import Card from 'react-bootstrap/Card';

const ActivityBlock = styled.div`
    // border: 1px dashed gray;
    // border-radius: 6px;
    margin: 0 auto;
`;

const ChildrenBlock = styled.div<{ $parallel?: boolean; }>`
    display: flex;
    flex-direction: column;
    align-items: start;

    ${props => props.$parallel && css`
        flex-direction: row;
        column-gap: 1em;
        border: 1px dashed gray;
        border-radius: 6px;
        padding: 5px;
        margin: 1em;
    `}
`;

export const Activity: React.FC<{ activity: TemplateActivityType }> = ({ activity }) => {

    const children = activity.Children;

    const isSystem = activity.Type === 'EmptyBlockActivity' || activity.Type === 'SequenceActivity';
    const parallel = activity.Type === 'IfElseActivity' || activity.Type === 'ApproveActivity';

    return (
        <ActivityBlock>
            {
            !isSystem
            &&
            <Card style={{ width: '18rem', margin: '1em auto' }}>
                <Card.Header>{activity.Type}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {activity.Properties.Title}
                    </Card.Text>
                </Card.Body>
            </Card>
            }
            {
                children.length > 0 
                && <ChildrenBlock $parallel = {parallel}>
                    {children.map(child => <Activity key={child.Name} activity={child} />)}            
                </ChildrenBlock>
            }
        </ActivityBlock>
    );
}
