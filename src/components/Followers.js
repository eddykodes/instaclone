import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export class Followers extends Component {
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
        <li className="list-inline-item" onClick={this.handleShow}><b>{this.props.followerCount}</b> followers</li>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div className='p-3'>

            <div className='d-flex justify-content-between mb-2'>
              <div className='home-profile d-flex align-items-center'>
                <Image src={this.props.user.credentials.userImage} alt='profile' className='mr-3'/>
                <ul className='list-unstyled m-0'>
                  <li><b>{this.props.user.credentials.userName}</b></li>
                  <li className='text-grey'>{this.props.user.credentials.userName}</li>
                </ul>
              </div>
              <div className='d-flex align-items-center'>
                <Button size='sm' variant='primary'>Follow</Button>
              </div>
            </div>

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
  
}

export default connect(mapStateToProps, mapActionsToProps)(Followers)
