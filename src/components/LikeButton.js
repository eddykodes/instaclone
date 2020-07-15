import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { likePost } from '../redux/actions/dataActions'

// Bootstrap
import { Heart } from 'react-bootstrap-icons'

export class LikeButton extends Component {
  likePost = () => {
    this.props.likePost(this.props.postId)
  }
  render() {
    return (
      <Fragment>
        <Heart className='mr-3' size={25} onClick={this.likePost} />
      </Fragment>
    )
  }
}

LikeButton.propTypes = {
  likePost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({

})

const mapActionsToProps = {
  likePost
}

export default connect(mapStateToProps, mapActionsToProps)(LikeButton)
