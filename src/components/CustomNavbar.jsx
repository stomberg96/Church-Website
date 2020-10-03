import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/hcacLogo3.png';

const Styles = styled.div`
  .navbar {
    background-color: #fff;
    border-bottom:2.5px solid #2d3b80;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #2d3b80;
    font-weight: bold;
    font-family: Garamond;
    font-size: 20px;
    margin-right: 50px
    &:hover {
      color: black;

    }
  }
  .navbar-brand {
    width:150px;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .navbar-brand img {
    height: 120px;
    margin-left: 55px
  }
  .navbar-nav {
    margin-left: 10px
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navLinks">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link>  </Nav.Item>
          <Nav.Item><Nav.Link href="/news">News</Nav.Link> </Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link> </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)