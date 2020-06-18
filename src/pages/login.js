import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'

export class login extends Component {
  render() {
    return (
      <div className='root login'>
        <Container>
          <h1>Login</h1>
          <p>Create a new account <Link to='/signup'>here.</Link></p>
        </Container>
      </div>
    )
  }
}

export default login
