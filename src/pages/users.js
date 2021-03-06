import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// Components
import PostDialog from '../components/PostDialog'
import ProfileHeader from '../components/ProfileHeader'
import ProfileHeaderSkeleton from '../components/ProfileHeaderSkeleton'

// Redux
import { connect } from 'react-redux'
import { getUserData } from '../redux/actions/dataActions'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { Grid3x3, Tv, Heart, Bookmark } from 'react-bootstrap-icons'

export class users extends Component {
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
    const { posts, loading } = this.props.data

    const postsMarkup = loading ? (
      <>
        <Col xs={4} md={4}>
          <div className='skeleton-postwrapper'>
            <div className='skeleton-post'></div>
          </div>
        </Col>
        <Col xs={4} md={4}>
          <div className='skeleton-postwrapper'>
            <div className='skeleton-post'></div>
          </div>
        </Col>
        <Col xs={4} md={4}>
          <div className='skeleton-postwrapper'>
            <div className='skeleton-post'></div>
          </div>
        </Col>
      </>
    ) : posts.length === 0 ? (
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
            this.state.profile && !this.props.user.loading ? (
              <ProfileHeader profile={this.state.profile} authUser={this.props.user.credentials.userName} />
            ) : (
              <ProfileHeaderSkeleton />
            )
          } 
          <hr />
          <Row>
            <Col>
              <Nav
                activeKey="/profile"
                className='justify-content-center Profile-Nav'
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

users.propTypes = {
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

export default connect(mapStateToProps, mapActionsToProps)(users)
