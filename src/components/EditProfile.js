import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// Bootstrap
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class EditProfile extends Component {
  constructor(){
    super()
    this.state = {
      show: false,
      userName: '',
      name: '',
      bio: '',
      errors: {}
    }
  }
  mapUserToState = (user) => {
    console.log(user)
    this.setState({
      userName: user.userName ? user.userName : '',
      name: user.name ? user.name : '',
      bio: user.bio ? user.bio : '',
    })
  }
  handleShow = () => {
    this.setState({ show: true })
    this.mapUserToState(this.props.user.credentials)
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }
  render() {
    return (
      <Fragment>
        <Button size='sm' variant='outline-dark' onClick={this.handleShow}>Edit Profile</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form className='EditProfile p-3' onSubmit={this.handleSubmit}>
            <Form.Group as={Row} controlId="formUserName">
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='text' value={this.state.userName} onChange={this.handleChange} isInvalid={this.state.errors.userName ? (true):(false)} />
                <Form.Control.Feedback type='invalid'>{this.state.errors.userName}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='text' value={this.state.name} onChange={this.handleChange} isInvalid={this.state.errors.name ? (true):(false)} />
                <Form.Control.Feedback type='invalid'>{this.state.errors.name}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBio">
              <Form.Label column sm={2}>
                Bio
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='text' value={this.state.bio} onChange={this.handleChange} isInvalid={this.state.errors.bio ? (true):(false)} />
                <Form.Control.Feedback type='invalid'>{this.state.errors.bio}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <div className='d-flex justify-content-around mt-3'>
              <span className='link-unstyled' onClick={this.handleClose}><b>Cancel</b></span>
              <span className='btn-link link-unstyled' onClick={this.handleSubmit}><b>Post</b></span>
            </div>
            
          </Form>

        </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapActionsToProps = {
  
}

export default connect(mapStateToProps, mapActionsToProps)(EditProfile)
