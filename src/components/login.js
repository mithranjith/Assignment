import React , {useState,useEffect} from 'react'
import SignIn from './signin'
import User from './UsersContainer'
import ThankYou from './thankyou'
import { Switch, Route, Redirect } from 'react-router-dom';

function Login (props) {

    return  <div className="">
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route path="/user" component={User} />
      <Route path="/thanks" component={ThankYou} />
      <Redirect from="/" to="/login" />
    </Switch>
  </div>
}

export default Login