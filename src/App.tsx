import React from 'react'
import Login from './screens/Login'
import Root from './screens/Root'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Root} />
      </Switch>
    </HashRouter>
  )
}

export default App
