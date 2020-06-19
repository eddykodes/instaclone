import React, { Component } from 'react'
import profilePic from '../images/profile.jpg'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// Components
import Post from '../components/Post'
import ProfileCard from '../components/ProfileCard'

export class home extends Component {
  render() {
    return (
      <div className='root home'>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Post />
              <Post />
            </Col>
            <Col className='d-none d-lg-block'>
              <div className='home-profile d-flex align-items-center p-3'>
                <Image src={profilePic} alt='profile' className='mr-3'/>
                <ul className='list-unstyled m-0'>
                  <li><b>Username</b></li>
                  <li className='text-grey'>Name</li>
                </ul>
              </div>
              <div className='home-suggestions py-3'>
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

export default home
