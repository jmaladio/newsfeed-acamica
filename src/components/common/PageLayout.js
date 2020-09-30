import React from "react";
import styled from "styled-components";
import { Header } from "./";

// ... </styles>
const Content = styled.main`
  max-width: 1200px;
  margin: 8rem auto 0 auto;
  padding: 0 3rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 667px) {
    margin: 11rem auto 0 auto;
  }

  @media (min-width: 1024px) {
    margin: 8rem auto 0 auto;
  }
`;
// ... </styles>

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
