import React from 'react'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProfileHeaderSkeleton(props) {

  return (
    <Row className='Profile-Details'>
      <Col className='text-center' xs={12} sm={6} md={4}>
        <div className='skeleton-profile-large mx-auto'></div>
      </Col>
      <Col>
        <div>
          <h4><div className="skeleton-line"></div></h4>
          
          <ul className="list-inline">
            <li className="list-inline-item"><div className="skeleton-line"></div></li>
            <li className="list-inline-item"><div className="skeleton-line"></div></li>
          </ul>
        </div>
        <div className='my-3'>
          <div className="skeleton-line"></div>
        </div>
      </Col>
    </Row>
  )
}

export default ProfileHeaderSkeleton
