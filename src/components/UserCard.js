import React from 'react'

// Bootstrap
import Image from 'react-bootstrap/Image'

const UserCard = (props) => {
  return (
      <div className='home-profile d-flex align-items-center p-3 mb-3'>
        <Image src={props.userImage} alt='profile' className='mr-3'/>
        <ul className='list-unstyled m-0'>
          <li><b>{props.userName}</b></li>
          <li className='text-grey'>{props.name}</li>
        </ul>
      </div>
  )
}

export default UserCard
