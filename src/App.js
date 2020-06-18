import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Pages
import home from './pages/home'
import messages from './pages/messages'
import profile from './pages/profile'
import login from './pages/login'
import signup from './pages/signup'
import notifications from './pages/notifications'

// Components
import MainNavbar from './components/MainNavbar'

function App() {
  return (
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

  );
}

export default App;
