import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_USER, LOADING_USER, SET_UNAUTHENTICATED } from '../types'
import axios from 'axios'

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`
  localStorage.setItem('FBIdToken', FBIdToken)
  axios.defaults.headers.common['Authorization'] = FBIdToken
}

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER })
  axios.get('/user')
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios.post('/login', userData)
    .then(res => {
      setAuthorizationHeader(res.data.token)
      dispatch(getUserData())
      dispatch({ type: CLEAR_ERRORS })
      history.push('/')
    })
    .catch(err => 
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    )
}

export const signupUser = (newUserData, history) => (dispatch) =>{
  dispatch({ type: LOADING_UI })
  axios.post('/signup', newUserData)
    .then(res => {
      setAuthorizationHeader(res.data.token)
      dispatch(getUserData())
      dispatch({ type: CLEAR_ERRORS })
      history.push('/')
    })
    .catch(err => 
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      }))
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken')
  delete axios.defaults.headers.common['Authorization']
  dispatch({ type: SET_UNAUTHENTICATED })
}