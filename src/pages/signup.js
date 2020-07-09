import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoImage from '../images/logo.png'

// Redux
import { connect } from 'react-redux'
import { signupUser } from '../redux/actions/userActions'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


export class signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      userName: '',
      name: '',
      password: '',
      confirmPassword: '',
      errors: {}
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors){
      this.setState({
        errors: nextProps.UI.errors
      })
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    const newUserData = {
      email: this.state.email,
      userName: this.state.userName,
      name: this.state.name,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    }
    this.props.signupUser(newUserData, this.props.history)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div className='root signup'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col xs={12} sm={8} md={5} lg={5}>
              <div className='LoginForm borderblock text-center'>

                <Image className='LoginForm-Logo' src={logoImage} />

                
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Control size='sm' name='email' value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type={this.state.errors.email ? true : false }>{this.state.errors.email}</Form.Control.Feedback> 
                  </Form.Group>
                  <Form.Group controlId="formUsername">
                    <Form.Control size='sm' name='userName' value={this.state.userName} onChange={this.handleChange} type="text" placeholder="Username" />
                    <Form.Control.Feedback type={this.state.errors.userName ? true : false }>{this.state.errors.userName}</Form.Control.Feedback> 
                  </Form.Group>
                  <Form.Group controlId="formName">
                    <Form.Control size='sm' name='name' value={this.state.name} onChange={this.handleChange} type="text" placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control size='sm' name='password' value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                    <Form.Control.Feedback type={this.state.errors.password ? true : false }>{this.state.errors.password}</Form.Control.Feedback> 
                  </Form.Group>
                  <Form.Group controlId="formConfirmPassword">
                    <Form.Control size='sm' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} type="password" placeholder="Confirm Password" />
                    <Form.Control.Feedback type={this.state.errors.confirmPassword ? true : false }>{this.state.errors.confirmPassword}</Form.Control.Feedback> 
                  </Form.Group>
                  <Button variant="primary" type="submit" size='sm' disabled={this.props.UI.loading} block>
                    Submit
                  </Button>
                </Form>
                <hr />
                <div>
                  <span>Already have an account? <b><Link to='/login'>Log In</Link></b></span></div>
              </div>

            </Col>
          </Row>
          
        </Container>
      </div>
    )
  }
}

signup.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(signup)
