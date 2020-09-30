import React from "react";
import styled from "styled-components";

// <styles> ...
const NewsCardWrapper = styled.article`
  width: 100%;
  padding: 3rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  position: relative;

  > h2 {
    font-family: "Roboto Slab";
    font-weight: 500;
    color: #5959a9;
    font-size: 2rem;
    text-align: center;
    letter-spacing: 1px;
    padding: 0 1rem;
    align-self: center;
  }

  > h3 {
    font-family: "Roboto Slab";
    color: #696969;
    font-size: 1.6rem;
    text-align: right;
    font-weight: 300;
    letter-spacing: 2px;
    flex: 1 1 1%;
    align-self: right;
    padding: 0 1rem;
  }

  > a {
    font-size: 2rem;
    width: 5rem;
    background-color: blueviolet;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    display: block;
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 4rem;
    &:link,
    &:visited {
      text-decoration: none;
      color: #fff;
    }
  }

  @media (min-width: 812px) {
    width: 40%;

    > h2 {
      font-size: 2rem;
    }

    > a {
      font-size: 1.6rem;
      width: 4rem;
    }
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: 2.5rem;
    }

    > a {
      font-size: 1.8rem;
      width: 4rem;
    }
  }
`;

const StyledImg = styled.div`
  padding-top: 56.25%;
  height: 0;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  > img {
    width: 100%;
    margin-bottom: 1rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

// ... </styles>

export const NewsCard = ({ img_url, title, source_name, url }) => {
  return (
    <NewsCardWrapper>
      <StyledImg>
        <img src={img_url} alt={title} />
      </StyledImg>
      <h2>{title}</h2>
      <h3>{source_name}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Leer
      </a>
    </NewsCardWrapper>
  );
};
