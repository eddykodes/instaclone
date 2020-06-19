import React, { Component } from 'react'
import profilePic from '../images/profile.jpg'

// Components
import ProfileChat from '../components/ProfileChat'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ChatSquare } from 'react-bootstrap-icons'

export class messages extends Component {
  render() {

    const chatting=true;

    return (
      <div className='root'>
        <Container>
          <Row noGutters className='messages borderblock'>
            <Col xs={3} sm={5} md={4} lg={3} className='messages-left'>
              <div>
                <ProfileChat profile={profilePic} username='Username' message='This is a sample message that they would have' />
                <ProfileChat profile={profilePic} username='Username' message='This is a sample message that they would have' />
                <ProfileChat profile={profilePic} username='Username' message='This is a sample message that they would have' />
              </div>
            </Col>
            <Col xs={9} sm={7} md={8} lg={9} className='messages-right'>
            { !chatting ? (
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-center'>
                  <ChatSquare size={50} />
                  <h4>Your Messages</h4>
                  <p>Send private photos and messages to a friend or group</p>
                </div> 
              </div>
              ) : (
                <div className='d-flex flex-column h-100'>
                  <div className='align-self-stretch messages-log h-100 p-3'>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                    <p>Messages Loading...</p>
                  </div>
                  <form className='messages-message d-flex justify-content-between p-3'>
                    <input type='text' className='w-100' placeholder='Send a message...' />
                    <a href='/comment'><b>Post</b></a>
                  </form>
                </div>
              )
            }

              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default messages
