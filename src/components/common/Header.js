import React from "react";
import styled from "styled-components";
import { NavLink, Redirect } from "react-router-dom";
import { sections } from "data";
import { v4 as uuidv4 } from "uuid";
import { SearchInput } from "./";

// <styles> ...
const HeaderWrapper = styled.header`
  height: ${(props) => (props.open ? "100vh" : "6.5rem")};
  width: 100%;
  box-sizing: border-box;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;

  @media (min-width: 667px) {
    padding: 3rem 3rem 0 3rem;
    height: 11rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    height: 8rem;
    width: 100%;
    padding: 3rem 3rem 0 3rem;
    display: flex;

    flex-flow: row nowrap;
  }
`;

const Menu = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 8rem;
  padding-bottom: 2rem;
  box-sizing: border-box;

  > nav {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 70%;
    align-items: center;
  }

  > div {
    order: -1;
    height: 15%;
  }

  @media (min-width: 667px) {
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 100%;
    flex: 1 0 50rem;
    max-width: 120rem;
    align-items: baseline;

    > nav {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }

    > div {
      align-self: center;
      width: 66%;
      order: -1;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    > nav {
      height: 100%;
      align-items: center;
    }

    > div {
      height: 100%;
      flex: 1 0 15rem;
      order: 1;
      display: flex;
      align-items: center;
    }
  }
`;

const MobileMenuIcon = styled.div`
  position: absolute;
  left: 3rem;
  top: 1.5rem;
  width: 25px;
  min-width: 35px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 667px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 3rem;
  text-decoration: none;
  font-weight: 500;
  color: #898989;
  padding: 0 1rem;

  :link,
  :visited {
    color: #898989;
  }

  :hover {
    color: blueviolet;
  }

  &:before {
    content: "#";
  }

  &.active {
    font-weight: 800;
    color: black;
  }

  @media (min-width: 667px) {
    font-size: 1.6rem;
  }
`;

// ... </styles>

export class Header extends React.Component {
  state = {
    input: "",
    redirect: false,
    mobileMenuOpen: false,
  };

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      input: "",
      redirect: false,
    }));
  }

  componentDidUpdate() {
    if (this.state.redirect) {
      this.setState((prevState) => ({
        ...prevState,
        redirect: false,
      }));
    }
  }

  handleInputChange = (e) => {
    e.persist();
    this.setState((prevState) => ({ ...prevState, input: e.target.value }));
  };

  handleUserSearch = (e) => {
    e.persist();
    if (e.key === "Enter" || e.target.type === "button") {
      this.setState((prevState) => ({ ...prevState, redirect: true }));
    }
  };

  handleMobileMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  render() {
    const { input, redirect, mobileMenuOpen } = this.state;
    const redirectTo = {
      pathname: `/search/${input}`,
      state: { search: input },
    };
    const sectionsLinks = sections.map((section) => {
      const { name, id } = section;
      const linkTo = {
        pathname: `/categoria/${id}`,
        state: { section: id },
      };
      return (
        <StyledNavLink
          key={uuidv4()}
          to={linkTo}
          onClick={this.handleMobileMenu}
        >
          {name}
        </StyledNavLink>
      );
    });

    return (
      <HeaderWrapper open={mobileMenuOpen}>
        <MobileMenuIcon onClick={this.handleMobileMenu}>
          <div />
          <div />
          <div />
        </MobileMenuIcon>
        <Menu open={mobileMenuOpen}>
          <nav>
            <StyledNavLink key={uuidv4()} exact to="/">
              Inicio
            </StyledNavLink>
            {sectionsLinks}
          </nav>
          <div>
            <SearchInput
              inputValue={input}
              handleInputChange={this.handleInputChange}
              handleUserSearch={this.handleUserSearch}
            />
          </div>
        </Menu>
        {redirect && <Redirect to={redirectTo} push={true} key={uuidv4()} />}
      </HeaderWrapper>
    );
  }
}
