import React, { Component } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Components
import Post from '../components/Post'

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
            <Col className='d-none d-lg-block'>Profile</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default home
