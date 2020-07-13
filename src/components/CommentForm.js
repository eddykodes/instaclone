import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'

export class CommentForm extends Component {
  render() {
    return (
      <form className='Post-Comment d-flex justify-content-between p-3'>
        <input type='text' className='w-100' placeholder='Add a comment' />
        <a href='/comment'><b>Post</b></a>
      </form>
    )
  }
}

CommentForm.propTypes = {

}

const mapStateToProps = (state) => ({
  
})

const mapActionsToProps = {
  
}

export default connect(mapStateToProps, mapActionsToProps)(CommentForm)
