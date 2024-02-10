import React from "react";
import { TemplateActivityType } from "../types/Template";
import { styled, css } from "styled-components";

import Card from "react-bootstrap/Card";

const ActivityBlock = styled.div`
  // border: 1px dashed gray;
  // border-radius: 6px;
  margin: 0 auto;
`;

const ChildrenBlock = styled.div<{ $parallel?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${(props) =>
    props.$parallel &&
    css`
      flex-direction: row;
      column-gap: 1em;
      border: 1px dashed gray;
      border-radius: 6px;
      padding: 5px;
      margin-bottom: 1em;
    `}
`;

export const Activity: React.FC<{ activity: TemplateActivityType }> = ({
  activity,
}) => {
  const children = activity.Children;

  const isSystem =
    activity.Type === "EmptyBlockActivity" ||
    activity.Type === "SequenceActivity" ||
    activity.Type === "SequentialWorkflowActivity";
  const parallel =
    activity.Type === "IfElseActivity" || activity.Type === "ApproveActivity";
  const parallelBranch = activity.Type === "IfElseBranchActivity";

  return (
    <ActivityBlock>
      {!isSystem && (
        <Card
          bg={parallel ? "warning" : ""}
          border={parallelBranch ? "warning" : ""}
          style={{ width: parallel ? "auto" : "18rem", margin: "0 auto 1em" }}
        >
          {!parallelBranch && <Card.Header>{activity.Type}</Card.Header>}
          <Card.Body>
            <Card.Text>{activity.Properties.Title}</Card.Text>
          </Card.Body>
        </Card>
      )}
      {children && children.length > 0 && (
        <ChildrenBlock $parallel={parallel}>
          {children.map((child) => (
            <Activity key={child.Name} activity={child} />
          ))}
        </ChildrenBlock>
      )}
    </ActivityBlock>
  );
};
