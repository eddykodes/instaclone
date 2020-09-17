import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../redux/actions/dataActions'

// Bootstrap
import { Heart, HeartFill } from 'react-bootstrap-icons'

export class LikeButton extends Component {
  constructor(){
    super()
    this.state = {
      likeStatus: null,
      errors: {}
    }
  }
  componentDidMount(){
    this.checkStatus()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors })
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ likeStatus: !this.state.likeStatus })
    }
  }
  checkStatus = () => {
    if(this.props.user.likes && this.props.user.likes.find((like) => like.postId === this.props.postId)){
      this.setState({ likeStatus: true })
    } else {
      this.setState({ likeStatus: false })
    }
  }
  likePost = () => {
    this.props.likePost(this.props.postId)
    this.setState({ likeStatus: true })
  }
  unlikePost = () => {
    this.props.unlikePost(this.props.postId)
    this.setState({ likeStatus: false })
  }
  render() {
    return (
      <Fragment>
        {
          this.state.likeStatus ? (
            <HeartFill className='mr-3' size={25} onClick={this.unlikePost} />
          ) : (
            <Heart className='mr-3' size={25} onClick={this.likePost} />
          )
        }
        <span>{this.props.postId}</span>
        
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
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  likePost,
  unlikePost
}

export default connect(mapStateToProps, mapActionsToProps)(LikeButton)
