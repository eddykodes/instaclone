import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { submitComment } from '../redux/actions/dataActions'

export class CommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: '',
      errors: {}
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '' });
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitComment(this.props.postId, { body: this.state.body })
  }
  render() {
    return (
      <form className='Post-Comment d-flex justify-content-between p-3'>
        <input type='text' className='w-100' name='body' value={this.state.body} onChange={this.handleChange} placeholder='Add a comment' />
        <span className='btn-link link-unstyled' onClick={this.handleSubmit}><b>Post</b></span>
      </form>
    )
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  UI: state.UI,
  user: state.user
})

const mapActionsToProps = {
  submitComment
}

export default connect(mapStateToProps, mapActionsToProps)(CommentForm)
