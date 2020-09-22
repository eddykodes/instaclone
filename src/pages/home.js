import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import Post from '../components/Post'
import PostSkeleton from '../components/PostSkeleton'
import NewPost from '../components/NewPost'
import Suggestions from '../components/Suggestions'
import UserCard from '../components/UserCard'
import UserCardSkeleton from '../components/UserCardSkeleton'

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
                this.props.user.authenticated && !this.props.user.loading ? (
                  <UserCard userImage={this.props.user.credentials.userImage} userName={this.props.user.credentials.userName} name={this.props.user.credentials.name} />
                ) : (
                  <UserCardSkeleton />
                )
              }
              <Suggestions authenticatedUser={this.props.user.credentials.userName}/>
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