import React, { Component } from 'react'

// Bootstrap
import Image from 'react-bootstrap/Image'

export class ProfileCard extends Component {
  render() {
    const {profile, userName, followerCount } = this.props

    const goToProfile = () => {
      window.location.assign(`/${userName}`)
    }

    return (
      <div className='ProfileCard d-flex align-items-center px-3 pt-2'>
        <Image src={profile} alt='profile'/>
        <ul className='list-unstyled m-0'>
          <li className='link-unstyled' onClick={() => goToProfile(userName)}><b>{userName}</b></li>
          <li className='sub-text text-grey'>Followed by {followerCount} others</li>
        </ul>
        <a href={`/${userName}`} className='ml-auto'><b>Follow</b></a>
      </div>
    )
  }
}

export default ProfileCard
