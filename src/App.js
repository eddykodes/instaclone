import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/types'
import { logoutUser, getUserData } from './redux/actions/userActions'

// Pages
import home from './pages/home'
import messages from './pages/messages'
import profile from './pages/profile'
import users from './pages/users'
import login from './pages/login'
import signup from './pages/signup'
import notifications from './pages/notifications'

// Components
import MainNavbar from './components/MainNavbar'
import PrivateRoute from './components/PrivateRoute'

axios.defaults.baseURL = 'https://us-central1-instaclone-df267.cloudfunctions.net/api'

// Look for authentication token that is created when user logs in
const token = localStorage.FBIdToken
if(token){
  const decodedToken = jwtDecode(token)
  // Check to see if token has expired
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
    // Reroute to login route when token is expired
    window.location.herf = '/login'
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData())
  }
}


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainNavbar />
          <Switch>
            <PrivateRoute exact path='/' component={home} />
            <PrivateRoute exact path='/messages' component={messages} />
            <PrivateRoute exact path='/profile' component={profile} />
            <PrivateRoute exact path='/notifications' component={notifications} />
            <Route exact path='/login' component={login} />
            <Route exact path='/signup' component={signup} />
            <PrivateRoute exact path='/:userName' component={users} />
            <PrivateRoute exact path='/:userName/posts/:postId' component={users} />
          </Switch>
        </div>      
      </Router>
    </Provider>


  );
}

export default App;
