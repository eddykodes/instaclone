import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// Bootstrap
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export class EditProfile extends Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
  }
  handleShow = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <Fragment>
        <Button size='sm' variant='outline-dark' onClick={this.handleShow}>Edit Profile</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div className='EditProfile'>
            Edit profile form here
          </div>
        </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
