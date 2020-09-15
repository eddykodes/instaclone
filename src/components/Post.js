import React, { Component } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Components
import CommentForm from './CommentForm'
import LikeButton from './LikeButton'
import PostDialog from './PostDialog'

// Bootstrap
import Image from 'react-bootstrap/Image'
import { Chat, Bookmark, ThreeDots } from 'react-bootstrap-icons'

export class Post extends Component {
  render() {

    const { ...post } = this.props.post

    dayjs.extend(relativeTime)

    return (
      <div className='Post borderblock'>
        <div className='Post-Header d-flex align-items-center px-3'>
          <Image src={post.userImage} alt='profile' className='mr-2'/><span><b>{post.userName}</b></span><span className='ml-auto'><ThreeDots size={20}/></span>
        </div>
        <Image src={post.userImage} alt='post' fluid />
        <div className='Post-Options d-flex align-items-center p-3'>
          <div className='mr-auto'>
            <LikeButton postId={post.postId}/>
            <Chat className='mb-1' size={25}/>
          </div>
          <div><Bookmark size={25}/></div>        
        </div>
        <div className='Post-Caption px-3 mb-2'>
            <div className='d-flex align-items-center mt-n1 mb-2'>
              <span>Liked by <b>{post.likeCount} others</b></span>
            </div>
            <ul className='list-unstyled mb-0'>
              <li><b>{post.userName}</b> {post.body}</li>
              <PostDialog post={this.props.post}/>
              {
                post.comments.map(comment => (
                  <li key={comment.createdAt}><span><b>{comment.userName}</b> {comment.body}</span></li>
                ))
              }
            </ul>
            <span className='Post-Caption-Date text-grey'>{dayjs(post.createdAt).fromNow()}</span>
        </div>
        <CommentForm postId={post.postId}/>
      </div>
    )
  }
}

export default Post
