import React from "react";
import styled from "styled-components";
import Container from "./container";
import ThemeSwitch from "./theme-switch";

//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HEADER_NAV_ITEM = [
  {
    label: "Etusivu",
    url: "/",
    isExternal: false,
  },
  {
    label: "Julkaisut",
    url: "/blog",
    isExternal: false,
  },
  {
    label: "Meistä",
    url: "https://i6o.fi/#team",
    isExternal: true,
  },
  {
    label: "Ota yhteyttä",
    url: "https://i6o.fi/#contact",
    isExternal: true,
  },
];

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <img src="/media/logo.png" alt="i6o Oy" height={90}/>
        <HeaderNavList>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="sticky-top">
                {HEADER_NAV_ITEM.map((item, index) => {
                  if (item.isExternal) {
                    return (
                    <Nav.Link href={item.url} target="_blank" 
                              rel="noopener noreferrer">{item.label}
                    </Nav.Link>)
                  }
                  return (
                    <Nav.Link href={item.url}>{item.label}
                    </Nav.Link>
                  )
                })}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <HeaderNavListItem>
            <ThemeSwitch />
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

const HeaderNavList = ({ children }) => {
  return (
    <StyledNav>
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  );
};

const HeaderNavListItem = ({ children }) => {
  return <StyledNavListItem>{children}</StyledNavListItem>;
};

const StyledHeader = styled.header`
  padding-top: var(--size-300);
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
/*
const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-400);
    color: inherit;
  }
`;
*/

const StyledNav = styled.nav`
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
`;

const StyledNavListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
  @media screen and (max-width: 700px) {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  & a {
    color: inherit;
    text-transform: uppercase;
    font-size: var(--size-300);
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 700px) {
    & a {
      font-size: 0.7rem;
    }
  }
`;
