import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


export class MainNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href="#home">instaclone</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to='/profile'>
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/messages'>
                <Nav.Link>Messages</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    )
  }
}

export default MainNavbar
