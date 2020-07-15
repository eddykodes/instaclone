import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import { Heart } from 'react-bootstrap-icons'

export class LikeButton extends Component {
  render() {
    return (
      <Fragment>
        <Heart className='mr-3'size={25}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapActionsToProps = {
  
}

export default connect(mapStateToProps, mapActionsToProps)(LikeButton)
