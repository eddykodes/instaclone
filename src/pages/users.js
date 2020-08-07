import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import profilePic from '../images/profile.jpg'

// Components
import Followers from '../components/Followers'
import Following from '../components/Following'

// Redux
import { connect } from 'react-redux'
import { getUserData } from '../redux/actions/dataActions'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Grid3x3, Tv, Heart, Bookmark } from 'react-bootstrap-icons'
import Axios from 'axios'

export class profile extends Component {
  state = {
    profile: {
      userName: '',
      userImage: '',
      name: '',
      bio: '',
      followerCount: 0,
      followingCount: 0
    },
  }
  componentDidMount(){
    const userName = this.props.match.params.userName

    this.props.getUserData(userName)
    axios.get(`/users/${userName}`)
      .then(res => {
        this.setState({
          profile: res.data.user
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    const {userName, userImage, name, bio, followerCount, followingCount} = this.state.profile
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
                
                <ul className="list-inline">
                  <li className="list-inline-item"><b>123</b> posts</li>
                  <Followers followerCount={followerCount} />
                  <Following followingCount={followingCount} />
                </ul>
              </div>
              <div className='my-3'>
                <b>{name}</b>
                <p>{bio}</p>
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
  user: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

const mapActionsToProps = {
  getUserData
}

export default connect(mapStateToProps, mapActionsToProps)(profile)
