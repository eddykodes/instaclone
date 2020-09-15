import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { LinkContainer } from 'react-router-bootstrap'

// Redux
import { connect } from 'react-redux'
import { markNotificationsRead } from '../redux/actions/userActions'

// Bootstrap
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'

// Icons
import { 
  Heart,
} from 'react-bootstrap-icons'

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </span>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled mb-0">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

export class MainNavbarNotifications extends Component {
  render() {
    const notifications = this.props.notifications

    dayjs.extend(relativeTime)

    let notificationsBadge

    if(notifications && notifications.length > 0){
      notifications.filter(not => not.read === false).length > 0
        ? (notificationsBadge = (
          <Badge pill variant='danger'>{notifications.filter(not => not.read === false).length}</Badge>
        )) : (
          notificationsBadge = null
        )
    } else {
      notificationsBadge = null
    }

    let notificationsMarkup = 
      notifications && notifications.length > 0 ? (
        notifications.map(not => {
          const verb = not.type ==='like' ? 'liked' : 'commented on'
          const time = dayjs(not.createdAt).fromNow()

          return (
            <LinkContainer to={`/${not.recipient}/post/${not.postId}`} className='mb-2'>
              <Dropdown.Item key={not.createdAt} className='px-3'>
              <div className='notification-content d-flex align-items-center'>
                <Image src={not.senderImage} roundedCircle className='notification-image mr-2' />
                <ul className='list-unstyled m-0'>
                  <li className='link-unstyled'><b>{not.sender}</b></li>
                  <li className='sub-text text-grey'>{verb} your post {time}</li>
                </ul>
              </div>
        </Dropdown.Item>
            </LinkContainer>
          )
        })
      ) : (
        <span>no new notifications</span>
      )

    return (
      <Dropdown alignRight>
        {
          console.log(notifications)
        }
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <Nav.Link><Heart size={20}/>{notificationsBadge}</Nav.Link>
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          {notificationsMarkup}
          <hr />
          <LinkContainer to='/notifications'>
            <Dropdown.Item className='notification-content text-center mt-n2'>See All Notifications</Dropdown.Item>
          </LinkContainer>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

MainNavbarNotifications.propTypes = {
  notifications: PropTypes.object.isRequired,
  markNotificationsRead: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notifications: state.user.notifications
})

const mapActionsToProps = {
  markNotificationsRead
}


export default connect(mapStateToProps, mapActionsToProps)(MainNavbarNotifications)
