import React from 'react'

// Components
import CommentForm from './CommentForm'
import LikeButton from './LikeButton'

// Bootstrap
import { Chat, Bookmark, ThreeDots } from 'react-bootstrap-icons'

export const PostSkeleton = () => {
  return (
    <div className='Post borderblock'>
      <div className='Post-Header d-flex align-items-center px-3'>
        <div className='skeleton-profile mr-2'></div><span className="skeleton-line"></span><span className='ml-auto'><ThreeDots size={20}/></span>
      </div>
      <div className='skeleton-postwrapper'>
        <div className='skeleton-post'></div>
      </div>
      <div className='Post-Options d-flex align-items-center p-3'>
        <div className='mr-auto'>
          <LikeButton/>
          <Chat className='mb-1' size={25}/>
        </div>
        <div><Bookmark size={25}/></div>        
      </div>
      <div className='Post-Caption px-3 mb-2'>
          <div className='d-flex align-items-center mt-n1 mb-2'>
            <div className='skeleton-profile mr-2'></div><span className='skeleton-line'></span>
          </div>
          <ul className='list-unstyled mb-0'>
            <li><span className="skeleton-line"></span></li>
            <li><span className="skeleton-line"></span></li>
          </ul>
          <span className='Post-Caption-Date skeleton-line'></span>
      </div>
      <CommentForm/>
    </div>
  )
}

export default PostSkeleton
