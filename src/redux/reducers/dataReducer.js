import { SET_POSTS, LOADING_DATA, CREATE_POST, LIKE_POST } from '../types'

const initialState = {
  posts: [],
  post: {},
  loading: false,
}


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
    case CREATE_POST:
      return {
        ...state,
        posts: [
          action.payload,
          ...state.posts
        ]
      }
    case LIKE_POST:
      let index = state.posts.findIndex((post) => post.postId === action.payload.postId)
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