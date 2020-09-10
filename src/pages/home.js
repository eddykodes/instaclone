import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// Components
import Post from '../components/Post'
import PostSkeleton from '../components/PostSkeleton'
import NewPost from '../components/NewPost'
import Suggestions from '../components/Suggestions'

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
                  <PostSkeleton />
                )
              }
            </Col>
            <Col className='d-none d-lg-block'>
              {
                this.props.user.authenticated ? (
                  <div className='home-profile d-flex align-items-center p-3 mb-3'>
                    <Image src={this.props.user.credentials.userImage} alt='profile' className='mr-3'/>
                    <ul className='list-unstyled m-0'>
                      <li><b>{this.props.user.credentials.userName}</b></li>
                      <li className='text-grey'>{this.props.user.credentials.name}</li>
                    </ul>
                  </div>
                ) : (
                  null
                )
              }
              <Suggestions />
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