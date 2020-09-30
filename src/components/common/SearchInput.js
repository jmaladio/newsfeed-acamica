import React from "react";
import styled from "styled-components";

// <styles> ...
const SearchInputWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
  flex: 1 1 100%;
  box-sizing: border-box;

  > input[type="text"] {
    border: none;
    border-bottom: 2px solid #898989;
    border-top: 2px solid #898989;
    border-left: 2px solid #898989;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0 0.8rem;
    flex: 1 0 10rem;

    font-family: inherit;
    font-weight: 500;
    font-size: inherit;
    color: #898989;

    &:focus {
      outline: none;
      border-bottom: 2px solid blueviolet;
      border-top: 2px solid blueviolet;
      border-left: 2px solid blueviolet;
      color: black;
    }
  }

  > input[type="button"] {
    border: none;
    width: 6rem;
    text-align: center;
    background-color: blueviolet;
    padding: 0.8rem 1rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;

    &:active {
      outline: none;
    }
  }

  @media (min-width: 410px) and (max-width: 666px) {
    flex: 1 1 50%;
    > input[type="text"] {
      font-size: 3rem;
      padding: 0.5rem 0.8rem;
      box-sizing: border-box;
      width: 100%;
    }
    > input[type="button"] {
      font-size: 2rem;
      padding: 0.5rem 0.8rem;
      box-sizing: border-box;
      width: 8rem;
    }
  }
`;
// ... </styles>

export const SearchInput = ({
  handleInputChange,
  handleUserSearch,
  inputValue,
}) => {
  return (
    <SearchInputWrapper>
      <input
        type="text"
        placeholder="#noticias sobre..."
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        onKeyPress={(e) => handleUserSearch(e)}
      />
      <input
        type="button"
        value="Buscar"
        onClick={(e) => handleUserSearch(e)}
      />
    </SearchInputWrapper>
  );
};
