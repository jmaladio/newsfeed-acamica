import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  font-family: "Source Code Pro";
  font-weight: 700;
  font-size: 3rem;
  color: #595959;
`;

export const Loading = () => {
  return <LoadingWrapper>{`<Loading {...news} />`} </LoadingWrapper>;
};
