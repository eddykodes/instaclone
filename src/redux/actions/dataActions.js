import { SET_POSTS, SET_POST, LOADING_DATA, CREATE_POST, SET_ERRORS, STOP_LOADING_UI, LOADING_UI, CLEAR_ERRORS, SUBMIT_COMMENT, LIKE_POST, UNLIKE_POST } from '../types'
import axios from 'axios'

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS })
}

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

// Get a single post
export const getPost = (postId) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios.get(`/posts/${postId}`)
    .then(res => {
      dispatch({
        type: SET_POST,
        payload: res.data
      })
      dispatch({
        type: STOP_LOADING_UI
      })
    })
    .catch(err => console.log(err))
}

// Create a new post
export const createPost = (newPost) => (dispatch) => {
  dispatch({ type: LOADING_UI })

  let formData = new FormData();
  formData.append('image', newPost.image, newPost.image.name)
  formData.append('body', newPost.body)
  formData.append('userName', newPost.userName)
  formData.append('userImage', newPost.userImage)

  axios.post('/posts', formData)
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

// Like a Post
export const likePost = (postId) => (dispatch) => {
  axios.post(`/posts/${postId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_POST,
        payload: res.data
      })
      dispatch(clearErrors())
    })
    .catch(err => console.log(err))
}

// Unlike a Post
export const unlikePost = (postId) => (dispatch) => {
  axios.post(`/posts/${postId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data
      })
      dispatch(clearErrors())
    })
    .catch(err => console.log(err))
}

// Get user data for user pages
export const getUserData = (userName) => (dispatch) => {
  dispatch({ type: LOADING_DATA })
  axios.get(`/users/${userName}`)
    .then(res => {
      dispatch({
        type: SET_POSTS,
        payload: res.data.posts
      })
    })
    .catch(() => {
      dispatch({
        type: SET_POSTS,
        payload: null
      })
    })
}