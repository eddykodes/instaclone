import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { followUser, unfollowUser } from '../redux/actions/userActions'

// Bootstrap
import Button from 'react-bootstrap/Button'

export class FollowButton extends Component {
  constructor(){
    super()
    this.state = {
      followStatus: null,
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
      this.setState({ followStatus: !this.state.followStatus })
    }
  }
  checkStatus = () => {
    if(this.props.user.credentials.following && this.props.user.credentials.following.find((follow) => follow.userName === this.props.userName)){
      this.setState({ followStatus: true })
    } else {
      this.setState({ followStatus: false })
    }
  }
  followUser = () => {
    this.props.followUser(this.props.userName)
  }
  unfollowUser = () => {
    this.props.unfollowUser(this.props.userName)
  }
  render() {
    return (
      <Fragment>
        {
          this.state.followStatus ? (
            <Button size='sm' variant='outline-dark' onClick={this.unfollowUser}>Unfollow</Button>
          ) : (
            <Button size='sm' variant='primary' onClick={this.followUser}>Follow</Button>
          )
        }
        
      </Fragment>
    )
  }
}

FollowButton.propTypes = {
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  followUser,
  unfollowUser
}

export default connect(mapStateToProps, mapActionsToProps)(FollowButton)
