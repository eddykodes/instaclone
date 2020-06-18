import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'

export class signup extends Component {
  render() {
    return (
      <div className='root signup'>
        <Container>
          <h1>Signup Page</h1>
          <p>Already have an Account? Login <Link to='/login'>here.</Link></p>
        </Container>
      </div>
    )
  }
}

export default signup
