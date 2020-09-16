import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import profilePic from '../images/profile.jpg'

// Components
import Followers from '../components/Followers'
import Following from '../components/Following'
import FollowButton from '../components/FollowButton'
import PostDialog from '../components/PostDialog'
import ProfileHeader from '../components/ProfileHeader'

// Redux
import { connect } from 'react-redux'
import { getUserData } from '../redux/actions/dataActions'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import { Grid3x3, Tv, Heart, Bookmark } from 'react-bootstrap-icons'

export class profile extends Component {
  state = {
    profile: null,
    postId: null
  }
  componentDidMount(){
    const userName = this.props.match.params.userName
    const postId = this.props.match.params.postId

    if(postId){
      this.setState({ postIdParam: postId})
    }

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
    // const { userName, userImage, name, bio, followerCount, followingCount } = this.state.profile
    const { posts, loading } = this.props.data
    const { postIdParam } = this.state

    const postsMarkup = loading ? (
      <span>loading...</span>
    ) : posts === null ? (
      <p>No posts yet</p>
    ) : (
      posts.map(post => (
        <Col key={post.postId} xs={4} md={4}>
          <PostDialog  post={post} />
        </Col>
      ))
    ) 

    return (
      <div className='root profile'>
        <Container>
          {
            this.state.profile ? (
              <ProfileHeader profile={this.state.profile}/>
            ) : (
              <span>loading</span>
            )
          }
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
            {
              postsMarkup
            }
          </Row>
        </Container>
      </div>
    )
  }
}

profile.propTypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.data,
  user: state.user
})

const mapActionsToProps = {
  getUserData
}

export default connect(mapStateToProps, mapActionsToProps)(profile)
