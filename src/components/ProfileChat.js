import React, { Component } from 'react'

// Bootstrap
import Image from 'react-bootstrap/Image'

export class ProfileChat extends Component {
  render() {
    const {profile, username, message } = this.props

    return (
      <div className='ProfileChat d-flex align-items-center p-3'>
        <Image src={profile} alt='profile'/>
        <ul className='list-unstyled m-0'>
          <li><b>{username}</b></li>
          <li><span class="d-inline-block text-truncate" style={{maxWidth: '150px'}}>{message}</span></li>
        </ul>
      </div>
    )
  }
}

export default ProfileChat
