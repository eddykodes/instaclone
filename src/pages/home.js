import React, { Component } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class home extends Component {
  render() {
    return (
      <div className='root home'>
        <Container>
          <Row>
            <Col xs={12} md={8}>Posts</Col>
            <Col className='d-none d-lg-block'>Profile</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default home
