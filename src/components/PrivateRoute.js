import React from 'react'
import { Route, Redirect } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authenticated
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
)

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
})

const mapActionsToProps = {
  
}

export default connect(mapStateToProps, mapActionsToProps)(PrivateRoute)
