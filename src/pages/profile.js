import React, { Component } from 'react'
import PropTypes from 'prop-types'
import profilePic from '../images/profile.jpg'

// Components
import EditProfile from '../components/EditProfile'

// Redux
import { connect } from 'react-redux'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import { Grid3x3, Tv, Heart, Bookmark } from 'react-bootstrap-icons'

export class profile extends Component {
  render() {
    const {userName, userImage, name, followerCount, followingCount} = this.props.user.credentials
    return (
      <div className='root profile'>
        <Container>
          <Row className='Profile-Details'>
            <Col className='text-center' xs={12} sm={6} md={4}>
              <Image className='Profile-Image' src={userImage}/>
            </Col>
            <Col>
              <div>
                <h4>{userName}</h4>
                
                <ul class="list-inline">
                  <li class="list-inline-item"><b>123</b> posts</li>
                  <li class="list-inline-item"><b>{followerCount}</b> followers</li>
                  <li class="list-inline-item"><b>{followingCount}</b> following</li>
                </ul>
              </div>
              <div className='my-3'>
                <b>{name}</b>
              </div>
              <div>
                <EditProfile />
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Nav
                activeKey="/profile"
                className='justify-content-center Profile-Nav'
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-center' eventKey="link-posts"><Grid3x3 /> <span className='ml-2'>Posts</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-center' eventKey="link-igtv"><Tv /> <span className='ml-2'>IGTV</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-center' eventKey="link-liked"><Heart /> <span className='ml-2'>Liked</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='d-flex align-items-center' eventKey="link-saved"><Bookmark /> <span className='ml-2'>Saved</span></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

          </Row>
          <Row noGutters className='Profile-Post-Grid'>
            <Col xs={4} md={4}>
              <Image fluid src={profilePic} />
            </Col>
            <Col xs={4} md={4}>
              <Image fluid src={profilePic} />
            </Col>
            <Col xs={4} md={4}>
              <Image fluid src={profilePic} />
            </Col>
            <Col xs={4} md={4}>
              <Image fluid src={profilePic} />
            </Col>
            <Col xs={4} md={4}>
              <Image fluid src={profilePic} />
            </Col>
            <Col xs={4} md={4}>
              <Image fluid src={profilePic} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

profile.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(profile)
