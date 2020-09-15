import React, { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Components
import CommentForm from './CommentForm'
import LikeButton from './LikeButton'

// Bootstrap
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Chat, Bookmark, ThreeDots } from 'react-bootstrap-icons'

function PostDialog(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { ...post } = props.post

  dayjs.extend(relativeTime)

  return (
    <>
    <li onClick={handleShow}>
      <span>View all {post.commentCount} comments</span>
    </li>

    <Modal show={show} onHide={handleClose} size='xl'>
      <Row className='Post borderblock m-0' noGutters>
        <Col xs={12} lg={8} xl={6}>
          <Image src={post.userImage} alt='post' fluid />
        </Col>
        <Col xs={12} lg={4} xl={6} className='d-flex flex-column'>
          <div className='Post-Header d-flex align-items-center px-3'>
            <Image src={post.userImage} alt='profile' className='mr-2'/><span><b>{post.userName}</b></span><span className='ml-auto'><ThreeDots size={20}/></span>
          </div>
          <div className='Post-Caption px-3 mb-2'>
            <p className='mb-0'>
              <b>{post.userName}</b> {post.body}
            </p>
            <span className='Post-Caption-Date text-grey'>{dayjs(post.createdAt).fromNow()}</span>
          </div>

          <div className='Post-Caption px-3 mb-2'>
              <ul className='list-unstyled mb-0'>
                {
                  post.comments.map(comment => (
                    <li key={comment.createdAt}><span><b>{comment.userName}</b> {comment.body}</span></li>
                  ))
                }
              </ul>

          </div>
          <div className="mt-auto">
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
            </div>
            <CommentForm postId={post.postId}/>
          </div>

        </Col>
        
      </Row>
    </Modal>
  </>

  )
}


export default PostDialog
