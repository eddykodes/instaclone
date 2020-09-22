import React from 'react'

const UserCardSkeleton = () => {
  return (
    <div className='home-profile d-flex align-items-center p-3 mb-3'>
      <div className='skeleton-profile skeleton-profile-user'></div>
      <ul className='list-unstyled m-0'>
        <li className='link-unstyled'><div className='skeleton-line'></div></li>
      </ul>
    </div>
  )
}

export default UserCardSkeleton
