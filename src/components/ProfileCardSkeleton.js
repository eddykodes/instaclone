import React from 'react'

const ProfileCardSkeleton = () => {
  return (
    <div className='ProfileCard d-flex align-items-center px-3 pt-2'>
      <div className='skeleton-profile'></div>
      <ul className='list-unstyled m-0'>
        <li className='link-unstyled'><div className='skeleton-line'></div></li>
      </ul>
      <span className='ml-auto'><b>View</b></span>
    </div>
  )
}

export default ProfileCardSkeleton
