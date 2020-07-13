import { SET_POSTS, LOADING_DATA, CREATE_POST, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SUBMIT_COMMENT } from '../types'
import axios from 'axios'

// Get all posts
export const getPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA })
  axios.get('/posts')
    .then(res => {
      dispatch({
        type: SET_POSTS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: SET_POSTS,
        payload: []
      })
    })
}

// Create a new post
export const createPost = (newPost) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios.post('/posts', newPost)
    .then(res => {
      dispatch({
        type: CREATE_POST,
        payload: res.data
      })
      dispatch(clearErrors())
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}

// Submit a comment
export const submitComment = (postId, commentData) => (dispatch) => {
  axios.post(`/posts/${postId}/comment`, commentData)
    .then(res => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      })
      dispatch(clearErrors())
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS })
}