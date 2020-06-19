import React, { Component, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/logo.png'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'

// Icons
import { 
  PersonCircle, 
  ChatSquare, 
  Heart,
  House,
} from 'react-bootstrap-icons'

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </span>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);


export class MainNavbar extends Component {
  render() {
    return (
      <Navbar expand="sm">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                height="25"
                className="d-inline-block align-top"
                alt="Instaclone logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/'>
                <Nav.Link><House size={20}/></Nav.Link>
              </LinkContainer>
              <LinkContainer to='/notifications'>
                <Nav.Link><Heart size={20}/></Nav.Link>
              </LinkContainer>
              <LinkContainer to='/messages'>
                <Nav.Link><ChatSquare size={20}/></Nav.Link>
              </LinkContainer>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  <Nav.Link><PersonCircle size={20}/></Nav.Link>
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <LinkContainer to='/login'>
                    <Dropdown.Item>Login</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/profile'>
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </LinkContainer>
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    )
  }
}

export default MainNavbar
