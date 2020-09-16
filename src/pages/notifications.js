import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { LinkContainer } from 'react-router-bootstrap'

// Redux
import { connect } from 'react-redux'
import { markNotificationsRead } from '../redux/actions/userActions'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export class notifications extends Component {
  render() {
    const notifications = this.props.notifications

    dayjs.extend(relativeTime)

    let notificationsMarkup = 
      notifications && notifications.length > 0 ? (
        notifications.map(not => {
          const verb = not.type ==='like' ? 'liked' : 'commented on'
          const time = dayjs(not.createdAt).fromNow()

          return (
            <LinkContainer to={`/${not.recipient}/posts/${not.postId}`} className='mb-2'>
              <div className='ProfileCard d-flex align-items-center px-3 pt-2'>
                <Image src={not.senderImage} roundedCircle className='mr-2' />
                <ul className='list-unstyled m-0'>
                  <li className='link-unstyled'><b>{not.sender}</b></li>
                  <li className='sub-text text-grey'>{verb} your post {time}</li>
                </ul>
              </div>
            </LinkContainer>
          )
        })
      ) : (
        <span>no new notifications</span>
      )

    return (
      <div className='root notifications'>
        <Container>
          {notificationsMarkup}
        </Container>
      </div>
    )
  }
}

notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  markNotificationsRead: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notifications: state.user.notifications
})

const mapActionsToProps = {
  markNotificationsRead
}


export default connect(mapStateToProps, mapActionsToProps)(notifications)