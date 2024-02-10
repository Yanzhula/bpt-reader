import React from "react";
import styled from "styled-components";

const StartElement = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  line-height: 70px;
  text-align: center;
  background: green;
  font-size: 40px;
  color: white;
  margin: 20px auto;
`;

export const Start: React.FC = () => {
  return (
    <StartElement>
      <span>▶</span>
    </StartElement>
  );
};
