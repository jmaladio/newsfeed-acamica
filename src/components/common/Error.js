import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  font-family: "Source Code Pro";
  font-weight: 700;
  font-size: 3rem;
  color: blueviolet;
`;

export const Error = () => {
  return <ErrorWrapper>{`<Error {...news} />`} </ErrorWrapper>;
};
