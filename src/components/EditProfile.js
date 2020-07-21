import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'
import { editUserDetails } from '../redux/actions/userActions'

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
  componentDidMount(){
    this.mapUserToState(this.props.user.credentials)
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
    const userDetails = {
      bio: this.state.bio,
      name: this.state.name
    }
    this.props.editUserDetails(this.props.user.credentials.userName, userDetails)
    this.handleClose()
  }
  render() {
    return (
      <Fragment>
        <Button size='sm' variant='outline-dark' onClick={this.handleShow} className='mr-1'>Edit Profile</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div className='p-3'>
            <h3>Edit Profile</h3>
            <Form className='EditProfile mt-3' onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formName">
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type='text' name='name' value={this.state.name} onChange={this.handleChange} isInvalid={this.state.errors.name ? (true):(false)} />
                  <Form.Control.Feedback type='invalid'>{this.state.errors.name}</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formBio">
                <Form.Label column sm={2}>
                  Bio
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type='text' name='bio' value={this.state.bio} onChange={this.handleChange} isInvalid={this.state.errors.bio ? (true):(false)} />
                  <Form.Control.Feedback type='invalid'>{this.state.errors.bio}</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <div className='d-flex justify-content-around mt-3'>
                <span className='link-unstyled' onClick={this.handleClose}><b>Cancel</b></span>
                <span className='btn-link link-unstyled' onClick={this.handleSubmit}><b>Post</b></span>
              </div>
            </Form>
          </div>
        </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapActionsToProps = {
  editUserDetails
}

export default connect(mapStateToProps, mapActionsToProps)(EditProfile)
