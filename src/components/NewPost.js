import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import { createPost, clearErrors } from '../redux/actions/dataActions'

// Bootstrap
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

import { 
  PlusCircle, 
} from 'react-bootstrap-icons'

export class NewPost extends Component {
  constructor(){
    super()
    this.state = {
      show: false,
      body: '',
      image: '',
      errors: {}
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors){
      this.setState({
        errors: nextProps.UI.errors
      })
    }
    if(!nextProps.UI.errors && !nextProps.UI.loading){
      this.setState({ body: '', open: false, errors: {}})
    }
  }
  handleShow = () => {
    this.setState({
      show: true
    })
  }
  handleClose = () => {
    this.props.clearErrors()
    this.setState({
      show: false,
      body: '',
      errors: {}
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createPost({ 
      body: this.state.body,
      image: this.state.image,
      userName: this.props.user.credentials.userName,
      userImage: this.props.user.credentials.userImage
    })
  }
  render() {
    const { userName, userImage } = this.props.user.credentials
    return (
      <Fragment>
        <div className='NewPost borderblock d-flex justify-content-center p-3 mb-3'>
          <div onClick={this.handleShow} className='text-center btn-link link-unstyled'>
            <PlusCircle size={20}/>
            <span className='d-block mt-1'>New Post</span>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <div className='Post'>
          <div className='Post-Header d-flex align-items-center px-3'>
            <Image src={userImage} alt='profile' className='mr-2'/><span><b>{userName}</b></span><span className='ml-auto'></span>
          </div>
          <Form className='' onSubmit={this.handleSubmit}>
            <div className='NewPost-Image-Container'>
              <div className='NewPost-Image d-flex justify-content-center align-items-center'>
                <Form.Group controlId="formBasicTest">
                  <Form.Control size='sm' name='image' value={this.state.image} onChange={this.handleChange} type="text" placeholder="Enter image" isInvalid={this.state.errors.image ? (true):(false)} />
                  <Form.Control.Feedback type='invalid'>{this.state.errors.image}</Form.Control.Feedback> 
                </Form.Group>
                {/* <Form.Group className='Create-Post-Image'>
                  <Form.File id="exampleFormControlFile1"/>
                </Form.Group> */}
              </div>
            </div>
            <Form.Group controlId="formTextArea" className='NewPost-Body p-3'>
              <Form.Control as='textarea' rows={3} name='body' value={this.state.body} onChange={this.handleChange} placeholder="Add a caption..." isInvalid={this.state.errors.body ? (true):(false)} />
              <Form.Control.Feedback type='invalid'>{this.state.errors.body}</Form.Control.Feedback> 
            </Form.Group>
            <div className='Post-Submit d-flex justify-content-around mt-3'>
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

NewPost.propTypes = {
  user: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  createPost,
  clearErrors
}

export default connect(mapStateToProps, mapActionsToProps)(NewPost)
