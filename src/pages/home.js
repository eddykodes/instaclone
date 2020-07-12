import React, { Component } from 'react'
import PropTypes from 'prop-types'
import profilePic from '../images/profile.jpg'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// Components
import Post from '../components/Post'
import NewPost from '../components/NewPost'
import ProfileCard from '../components/ProfileCard'

// Redux
import { connect } from 'react-redux'
import { getPosts } from '../redux/actions/dataActions'

export class home extends Component {
  componentDidMount(){
    this.props.getPosts()
  }
  render() {
    const { posts, loading } = this.props.data

    return (
      <div className='root home'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={8}>
              {
                this.props.user.authenticated ? (
                  <NewPost />
                ) : (
                  null
                )
              }
              {
                !loading
                ? ( 
                  posts.map(post => (
                    <Post post={post} key={post.postId} />
                  ))
                ) : (
                  <p>Loading...</p>
                )
              }
            </Col>
            <Col className='d-none d-lg-block'>
              {
                this.props.user.authenticated ? (
                  <div className='home-profile d-flex align-items-center p-3 mb-3'>
                    <Image src={profilePic} alt='profile' className='mr-3'/>
                    <ul className='list-unstyled m-0'>
                      <li><b>{this.props.user.credentials.userName}</b></li>
                      <li className='text-grey'>{this.props.user.credentials.name}</li>
                    </ul>
                  </div>
                ) : (
                  null
                )
              }
              <div className='home-suggestions'>
                <div className='px-3 d-flex justify-content-between'>
                  <b className='text-grey'>Suggestions For You</b>
                  <span className='ml-auto'>See All</span>
                </div>
                <ProfileCard profile={profilePic} username='Username' followerName='name' followerCount='5'/>
                <ProfileCard profile={profilePic} username='Username2' followerName='name2' followerCount='6'/>
                <ProfileCard profile={profilePic} username='Username3' followerName='name3' followerCount='12'/>
                <ProfileCard profile={profilePic} username='Username4' followerName='name3' followerCount='2'/>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  data: state.data,
  user: state.user
})

const mapActionsToProps = {
  getPosts
}

export default connect(mapStateToProps, mapActionsToProps)(home)