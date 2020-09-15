import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import ProfileCard from './ProfileCard'

function Suggestions(props) {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`/users`)
        setUsers(response.data)      
      } catch (err) {
        console.log(err)
      }
    }
    fetchUsers()
  }, [])
  return (
    <div className='Suggestions'>
    <div className='px-3 d-flex justify-content-between'>
      <b className='text-grey'>Suggestions For You</b>
      <span className='ml-auto'>See All</span>
    </div>
    {
      users && users.filter(user => user.userName !== props.authenticatedUser)
        .map(user => (
          <ProfileCard key={user.userName} profile={user.userImage} userName={user.userName} followerName={user.name} followerCount={user.followerCount}/>
        ))
    }
  </div>    
  )
}

export default Suggestions
