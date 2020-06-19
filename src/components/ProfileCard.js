import React, { Component } from 'react'

// Bootstrap
import Image from 'react-bootstrap/Image'

export class ProfileCard extends Component {
  render() {
    const {profile, username, followerName, followerCount } = this.props

    return (
      <div className='ProfileCard d-flex align-items-center px-3 pt-2'>
        <Image src={profile} alt='profile'/>
        <ul className='list-unstyled m-0'>
          <li><b>{username}</b></li>
          <li className='sub-text text-grey'>Followed by {followerName} + {followerCount} more</li>
        </ul>
        <a href='/profile' className='ml-auto'><b>Follow</b></a>
      </div>
    )
  }
}

export default ProfileCard
