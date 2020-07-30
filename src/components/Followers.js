import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import Modal from 'react-bootstrap/Modal'

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
          <div>
            list of followers here
          </div>
        </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapActionsToProps = {
  
}

export default connect(mapStateToProps, mapActionsToProps)(Followers)
