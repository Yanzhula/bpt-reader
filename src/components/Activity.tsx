import React from 'react';
import { TemplateActivityType } from '../types/Template';
import { styled, css } from 'styled-components';

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

const ActivityContainer = styled.div`
    width: 200px;
    // height: 50px;
    border: 1px solid gray;
    border-radius: 6px;
    margin: 1em auto 0;
`;

const ActivityTitle = styled.p`
    font-weight: normal;
    font-size: 12px;
    padding: 6px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const Activity: React.FC<{ activity: TemplateActivityType }> = ({ activity }) => {

    const children = activity.Children;

    const isSystem = activity.Type === 'EmptyBlockActivity' || activity.Type === 'SequenceActivity';
    const $parallel = activity.Type === 'IfElseActivity' || activity.Type === 'ApproveActivity';

    return (
        <ActivityBlock>
            {!isSystem && <ActivityContainer>
                <ActivityTitle>{activity.Properties.Title}</ActivityTitle>
                {/* <p>Type: {activity.Type}</p> */}
                {/* <p>Id: {activity.Name}</p> */}
            </ActivityContainer>}
            {
                children.length > 0 
                && <ChildrenBlock $parallel = {$parallel}>
                    {children.map(child => <Activity key={child.Name} activity={child} />)}            
                </ChildrenBlock>
            }
        </ActivityBlock>
    );
}
