import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import phoneImage from '../images/phone.png'
import logoImage from '../images/logo.png'

// Redux
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/userActions'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export class login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors){
      this.setState({
        errors: nextProps.UI.errors
      })
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData, this.props.history)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    
    if (this.props.user.authenticated) {
      return <Redirect to="/" />
    }

    return (
      <div className='root login'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col md={5} lg={5} className='d-none d-md-block'>
              <div>
                <Image fluid src={phoneImage}/>
              </div>
            </Col>
            <Col xs={12} sm={8} md={5} lg={5}>
              <div className='LoginForm borderblock text-center'>

                <Image className='LoginForm-Logo' src={logoImage} />

                
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control size='sm' name='email' value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter email" isInvalid={this.state.errors.email ? (true):(false)} />
                    <Form.Control.Feedback type='invalid'>{this.state.errors.email}</Form.Control.Feedback> 
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control size='sm' name='password' value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" isInvalid={this.state.errors.password ? (true):(false)} />
                    <Form.Control.Feedback type='invalid'>{this.state.errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit" size='sm' disabled={this.props.UI.loading} block>
                    Submit
                  </Button>
                </Form>
                <hr />
                <div>
                  <span>Don't have an account? <b><Link to='/signup'>Sign up</Link></b></span></div>
              </div>

            </Col>
          </Row>
          
        </Container>
      </div>
    )
  }
}

login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(login)
