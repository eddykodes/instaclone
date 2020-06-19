import React, { Component } from 'react'
import profilePic from '../images/profile.jpg'

// Bootstrap
import Image from 'react-bootstrap/Image'
import { Heart, Chat, Bookmark, ThreeDots } from 'react-bootstrap-icons'

export class Post extends Component {
  render() {
    return (
      <div className='Post'>
        <div className='Post-Header d-flex align-items-center px-3'>
          <img src={profilePic} alt='profile' className='mr-2'/><span><b>Username</b></span><span className='ml-auto'><ThreeDots size={20}/></span>
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
              <img src={profilePic} alt='profile' className='mr-2'/><span>Liked by <b>username</b> and <b>109 others</b></span>
            </div>
            <ul class='list-unstyled mb-0'>
              <li><b>username</b> This is a generic caption...</li>
              <li><a href='/comments'>View all 42 comments</a></li>
              <li><span><b>username</b> This is a generic comment</span><span className='comment-like'><Heart size={13}/></span></li>
              <li><span><b>username</b> This is a generic comment</span><span className='comment-like'><Heart size={13}/></span></li>
            </ul>
            <span className='Post-Caption-Date'>3 days ago</span>
        </div>
        <form className='Post-Comment d-flex justify-content-between p-3'>
          <input type='text' placeholder='Add a comment' />
          <a href='/comment'><b>Post</b></a>
        </form>
      </div>
    )
  }
}

export default Post
