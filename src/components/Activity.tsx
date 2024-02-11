import React, { useState } from "react";
import { TemplateActivityType } from "../types/Template";
import { styled, css } from "styled-components";

import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { ActivitySettings } from "./ActivitySettings";

const ActivityBlock = styled.div`
  margin: 0 auto;
`;

const ChildrenBlock = styled.div<{ $parallel?: boolean; $block?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${(props) =>
    props.$parallel &&
    css`
      flex-direction: row;
      column-gap: 1em;
    `}

  ${(props) =>
    (props.$parallel || props.$block) &&
    css`
      margin-top: -3em;
      margin-bottom: 1em;
      padding: 3em 1em 0;
      border: 1px dashed gray;
      border-radius: 6px;
    `}
`;

const ActivityTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ActivitySettingsWrap = styled.small`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const ActivityCollapseWrap = styled.small`
  position: absolute;
  top: 10px;
  right: 25px;
  cursor: pointer;
`;

export const Activity: React.FC<{ activity: TemplateActivityType }> = ({
  activity,
}) => {
  const children = activity.Children;

  const isSystem =
    activity.Type === "SequenceActivity" ||
    activity.Type === "SequentialWorkflowActivity";
  const parallel =
    activity.Type === "IfElseActivity" || activity.Type === "ApproveActivity";
  const parallelBranch = activity.Type === "IfElseBranchActivity";

  const bodyless = parallelBranch || activity.Type === "EmptyBlockActivity";

  const collapsible = parallel || activity.Type === "EmptyBlockActivity";
  const [open, setOpen] = useState(activity.Properties._DesMinimized !== "Y");
  const toggleOpen = () => setOpen((open) => !open);

  return (
    <ActivityBlock>
      {!isSystem && (
        <Card
          bg={parallel ? "warning" : ""}
          style={{
            width: parallel && open ? "auto" : "18rem",
            margin: "0 auto 1em",
          }}
        >
          <Card.Header>
            <ActivityTitle>
              {bodyless ? activity.Properties.Title : activity.Type}
            </ActivityTitle>
            <ActivitySettingsWrap>
              <ActivitySettings activity={activity} />
            </ActivitySettingsWrap>
            {collapsible && (
              <ActivityCollapseWrap onClick={toggleOpen}>
                {open ? "–" : "+"}
              </ActivityCollapseWrap>
            )}
          </Card.Header>

          {!bodyless && (
            <Card.Body>
              <Card.Text>
                <ActivityTitle>{activity.Properties.Title}</ActivityTitle>
              </Card.Text>
            </Card.Body>
          )}
        </Card>
      )}
      {children && children.length > 0 && (
        <Collapse in={open}>
          <ChildrenBlock
            $parallel={parallel}
            $block={activity.Type === "EmptyBlockActivity"}
          >
            {children.map((child) => (
              <Activity key={child.Name} activity={child} />
            ))}
          </ChildrenBlock>
        </Collapse>
      )}
    </ActivityBlock>
  );
};
