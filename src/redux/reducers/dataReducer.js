import { SET_POSTS, SET_POST, LOADING_DATA, CREATE_POST, LIKE_POST, UNLIKE_POST, SUBMIT_COMMENT } from '../types'

const initialState = {
  posts: [],
  post: {},
  loading: false,
}

let index = null

export default function(state = initialState, action){
  switch(action.type){
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case SET_POST:
      return {
        ...state,
        post: action.payload
      }
    case CREATE_POST:
      return {
        ...state,
        posts: [
          action.payload,
          ...state.posts
        ]
      }
    case SUBMIT_COMMENT:
      index = state.posts.findIndex((post) => post.postId === action.payload.postId)
      state.posts[index].comments.push(action.payload)
      return {
        ...state,
        posts: [
          ...state.posts
        ]
      }
    case LIKE_POST:
    case UNLIKE_POST:
      index = state.posts.findIndex((post) => post.postId === action.payload.postId)
      state.posts[index] = action.payload
      if(state.post.postId === action.payload.postId){
        state.post = action.payload
      }
      return {
        ...state
      }
    default:
      return state
  }
}