import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Pages
import home from './pages/home'
import messages from './pages/messages'
import profile from './pages/profile'
import login from './pages/login'
import signup from './pages/signup'
import notifications from './pages/notifications'

// Components
import MainNavbar from './components/MainNavbar'

axios.defaults.baseURL = 'https://us-central1-instaclone-df267.cloudfunctions.net/api'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainNavbar />
          <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/messages' component={messages} />
            <Route exact path='/profile' component={profile} />
            <Route exact path='/login' component={login} />
            <Route exact path='/signup' component={signup} />
            <Route exact path='/notifications' component={notifications} />
          </Switch>
        </div>      
      </Router>
    </Provider>


  );
}

export default App;
