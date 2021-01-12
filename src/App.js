import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route,Redirect,Switch } from 'react-router-dom';
import history from './history'
import './App.css'

import Login from './components/login'

function App () {
  return (
      <Router history={history}>
        <Switch>
        <Route path="/" component={Login} />
        </Switch>
        </Router>
  )
}

export default App
