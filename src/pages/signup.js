import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../images/logo.png'


// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


export class signup extends Component {
  render() {
    return (
      <div className='root signup'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col xs={12} sm={8} md={5} lg={5}>
              <div className='LoginForm borderblock text-center'>

                <Image className='LoginForm-Logo' src={logoImage} />

                
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control size='sm' type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formUsername">
                    <Form.Control size='sm' type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control size='sm' type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formConfirmPassword">
                    <Form.Control size='sm' type="password" placeholder="Confirm Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" size='sm' block>
                    Submit
                  </Button>
                </Form>
                <hr />
                <div>
                  <span>Already have an account? <b><Link to='/login'>Log In</Link></b></span></div>
              </div>

            </Col>
          </Row>
          
        </Container>
      </div>
    )
  }
}

export default signup
