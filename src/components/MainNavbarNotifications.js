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

// Icons
import { 
  Heart,
  Chat,
  Cursor

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
        <ul className="list-unstyled">
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
  state = {
    anchorEl: null
  }
  render() {

    const notifications = this.props.notifications
    const anchorEl = this.state.anchorEl

    dayjs.extend(relativeTime)

    let notificationsBadge

    if(notifications && notifications.length > 0){
      notifications.filter(not => not.read === false) > 0
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
          const icon = not.type === 'like' ? (
            <Heart />
          ) : (
            <Chat />
          )

          return (
            <LinkContainer to='/profile'>
              <Dropdown.Item key={not.createdAt}>{icon} {not.sender} {verb} your post {time}</Dropdown.Item>
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
