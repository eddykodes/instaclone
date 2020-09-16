import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import EditProfile from '../components/EditProfile'
import Followers from '../components/Followers'
import Following from '../components/Following'
import PostDialog from '../components/PostDialog'

// Redux
import { connect } from 'react-redux'
import { uploadImage } from '../redux/actions/userActions'
import { getUserData } from '../redux/actions/dataActions'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Grid3x3, Tv, Heart, Bookmark } from 'react-bootstrap-icons'

export class profile extends Component {

  componentDidMount(){
    const userName = this.props.match.params.userName
    this.props.getUserData(userName)
  }

  handleImageChange = (event) => {
    const image = event.target.files[0]
    const formData = new FormData()
    formData.append('image', image, image.name)
    this.props.uploadImage(formData)
  }
  handleEditPicture = () => {
    const fileInput = document.getElementById('profileImageInput')
    fileInput.click()
  }
  render() {
    const { userName, userImage, name, bio, followerCount, followingCount } = this.props.user.credentials
    const { posts, loading } = this.props.data

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
          <Row className='Profile-Details'>
            <Col className='text-center' xs={12} sm={6} md={4}>
              <Image className='Profile-Image' src={userImage}/>
              <input type='file' id='profileImageInput' hidden='hidden' onChange={this.handleImageChange} />
            </Col>
            <Col>
              <div>
                <h4>{userName}</h4>
                
                <ul className="list-inline">
                  <Followers followerCount={followerCount} />
                  <Following followingCount={followingCount} />
                </ul>
              </div>
              <div className='my-3'>
                <b>{name}</b>
                <p>{bio}</p>
              </div>
              <div>
                <EditProfile />
                <Button size='sm' variant='outline-dark' onClick={this.handleEditPicture}>Change Picture</Button>
              </div>
            </Col>
          </Row>
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
            {postsMarkup}
          </Row>
        </Container>
      </div>
    )
  }
}

profile.propTypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
})

const mapActionsToProps = {
  uploadImage,
  getUserData
}

export default connect(mapStateToProps, mapActionsToProps)(profile)
