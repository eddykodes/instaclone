import React, { Component } from 'react'
import profilePic from '../images/profile.jpg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Components
import CommentForm from './CommentForm'

// Bootstrap
import Image from 'react-bootstrap/Image'
import { Heart, Chat, Bookmark, ThreeDots } from 'react-bootstrap-icons'

export class Post extends Component {
  render() {

    const { ...post } = this.props.post

    dayjs.extend(relativeTime)

    return (
      <div className='Post borderblock'>
        <div className='Post-Header d-flex align-items-center px-3'>
          <Image src={profilePic} alt='profile' className='mr-2'/><span><b>{post.userName}</b></span><span className='ml-auto'><ThreeDots size={20}/></span>
        </div>
        <Image src={profilePic} alt='post' fluid />
        <div className='Post-Options d-flex align-items-center p-3'>
          <div className='mr-auto'>
            <Heart className='mr-3'size={25}/>
            <Chat className='mb-1' size={25}/>
          </div>
          <div><Bookmark size={25}/></div>        
        </div>
        <div className='Post-Caption px-3 mb-2'>
            <div className='d-flex align-items-center mt-n1 mb-2'>
              <Image src={profilePic} alt='profile' className='mr-2'/><span>Liked by <b>username</b> and <b>{post.likeCount} others</b></span>
            </div>
            <ul className='list-unstyled mb-0'>
              <li><b>username</b> {post.body}</li>
              <li><a href='/comments'>View all 42 comments</a></li>
              <li><span><b>username</b> This is a generic comment</span><span className='comment-like'><Heart size={13}/></span></li>
              <li><span><b>username</b> This is a generic comment</span><span className='comment-like'><Heart size={13}/></span></li>
            </ul>
            <span className='Post-Caption-Date text-grey'>{dayjs(post.createdAt).fromNow()}</span>
        </div>
        <CommentForm />
      </div>
    )
  }
}

export default Post
