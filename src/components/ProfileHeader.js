import React from 'react'

// Components
import Followers from '../components/Followers'
import Following from '../components/Following'
import FollowButton from '../components/FollowButton'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function ProfileHeader(props) {
  const { userName, userImage, name, bio, followerCount, followingCount } = props.profile

  return (
    <Row className='Profile-Details'>
      <Col className='text-center' xs={12} sm={6} md={4}>
        <Image className='Profile-Image' src={userImage}/>
      </Col>
      <Col>
        <div>
          <h4>{userName}</h4>
          
          <ul className="list-inline">
            <li className="list-inline-item"><b>123</b> posts</li>
            <Followers followerCount={followerCount} />
            <Following followingCount={followingCount} />
          </ul>
        </div>
        <div className='my-3'>
          <b>{name}</b>
          <p>{bio}</p>
        </div>
          <FollowButton userName={userName}/> 
      </Col>
    </Row>
  )
}

export default ProfileHeader
