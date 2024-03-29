import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavItem = styled(Link)`
  display: inline-block;
  margin: 0 1vw;
  white-space: nowrap;
  position: relative;
  transition: var(--transition);
  color: var(--lightColor);

  :after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    content: ".";
    color: transparent;
    height: 1px;
    transition: var(--transition);
  }

  :hover {
    color: var(--primaryColor);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
  )
}

export default NavLinks
