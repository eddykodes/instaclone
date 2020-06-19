import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import phoneImage from '../images/phone.png'
import logoImage from '../images/logo.png'


// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export class login extends Component {
  render() {
    
    return (
      <div className='root login'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col md={6} lg={5} xl={4} className='d-none d-md-block'>
              <div>
                <Image fluid src={phoneImage}/>
              </div>
            </Col>
            <Col xs={12} sm={8} md={6} lg={5} xl={4}>
              <div className='LoginForm borderblock text-center'>

                <Image className='LoginForm-Logo' src={logoImage} />

                
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control size='sm' type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control size='sm' type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" size='sm' block>
                    Submit
                  </Button>
                </Form>
                <hr />
                <div>
                  <span>Don't have an account? <b><Link to='/signup'>Sign up</Link></b></span></div>
              </div>

            </Col>
          </Row>
          
        </Container>
      </div>
    )
  }
}

export default login
