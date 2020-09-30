import React from "react";
import styled from "styled-components";
import { PageLayout } from "components/common";
import img from "img/cryptsofthenecrodancer404.gif";

const Error404Wrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 5rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 8px solid blueviolet;

  > img {
    width: 40%;
  }

  > span {
    font-family: "Source Code Pro";
    font-size: 4rem;
    color: blueviolet;
  }
`;

const Error404 = () => {
  return (
    <PageLayout>
      <Error404Wrapper>
        <span>404 NOT FOUND</span>
        <img src={img} alt="404 page not found" />
      </Error404Wrapper>
    </PageLayout>
  );
};

export default Error404;
