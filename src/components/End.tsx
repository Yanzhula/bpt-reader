import React from "react";
import styled from "styled-components";

const EndElement = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  line-height: 70px;
  text-align: center;
  background: red;
  font-size: 30px;
  color: white;
  margin: 20px auto;
`;

export const End: React.FC = () => {
  return (
    <EndElement>
      <span>⏹</span>
    </EndElement>
  );
};
