import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../redux/actions/dataActions'

// Bootstrap
import { Heart, HeartFill } from 'react-bootstrap-icons'

export class LikeButton extends Component {
  likedPost = () => {
    if(this.props.user.likes && this.props.user.likes.find((like) => like.postId === this.props.postId)){
      return true 
    } else {
      return false
    }
  }
  likePost = () => {
    this.props.likePost(this.props.postId)
  }
  unlikePost = () => {
    this.props.unlikePost(this.props.postId)
  }
  render() {
    return (
      <Fragment>
        {
          this.likedPost() ? (
            <HeartFill className='mr-3' size={25} onClick={this.unlikePost} />
          ) : (
            <Heart className='mr-3' size={25} onClick={this.likePost} />
          )
        }
        
      </Fragment>
    )
  }
}

LikeButton.propTypes = {
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapActionsToProps = {
  likePost,
  unlikePost
}

export default connect(mapStateToProps, mapActionsToProps)(LikeButton)
