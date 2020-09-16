import React, { Component, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/logo.png'
import PropTypes from 'prop-types'

// Components
import MainNavbarNotifications from './MainNavbarNotifications'

// Redux
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/userActions'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

// Icons
import { 
  ChatSquare, 
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
        <ul className="list-unstyled mb-0">
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
  handleLogout = () => {
    this.props.logoutUser()
  }
  render() {
    return (
      <Navbar className='navbar' expand="sm">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href="/">
              <Image
                src={logo}
                height="25"
                className="d-inline-block align-top"
                alt="Instaclone logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {
              this.props.user.authenticated 
              ? (
                <Nav className="ml-auto">
                  <LinkContainer to='/'>
                    <Nav.Link><House size={20}/></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/notifications'>
                    <MainNavbarNotifications />
                  </LinkContainer>
                  <LinkContainer to='/messages'>
                    <Nav.Link><ChatSquare size={20}/></Nav.Link>
                  </LinkContainer>
                  <Dropdown alignRight>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                      <Nav.Link><Image className='navbar-profile-image' src={this.props.user.credentials.userImage} alt='user' roundedCircle /></Nav.Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu as={CustomMenu}>
                      <LinkContainer to={`/${this.props.user.credentials.userName}/profile`}>
                        <Dropdown.Item>Profile</Dropdown.Item>
                      </LinkContainer>
                      <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav> 
              ) : (
                <Nav className="ml-auto">
                  <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/signup'>
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                </Nav>
              )              
            }
          </Navbar.Collapse>
        </Container>

      </Navbar>
    )
  }
}

MainNavbar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

const mapActionsToProps = {
  logoutUser
}


export default connect(mapStateToProps, mapActionsToProps)(MainNavbar)
