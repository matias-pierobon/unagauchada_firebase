// @flow
import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Toolbar from "react-md/lib/Toolbars"
import Paper from "react-md/lib/Papers"
import Button from "react-md/lib/Buttons/Button"
import Login from "../Login"
import Signin from "../Signin/Signin"
import FavorList from "../FavorList"

import "./App.scss"

const actions = [
  <Button key="ver" flat label="Ver Favores" />,
  <Button key="search" flat label="Buscar" />,
  <Button key="login" flat primary label="Login" />
]

const App = () => (
  <app>
    <Paper zDepth={1}>
      <Toolbar themed title="Una Gauchada" actions={actions} />
    </Paper>
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route path="/list" component={FavorList} />
      </div>
    </Router>
  </app>
)

export default App
