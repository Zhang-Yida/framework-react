import React from 'react'
import Home from './Home'
import Login from './Login'
import './App.css'

import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </HashRouter>
  )
}

export default App
