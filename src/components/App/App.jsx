// @flow
import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Toolbar from "react-md/lib/Toolbars"
import Paper from "react-md/lib/Papers"
import Button from "react-md/lib/Buttons/Button"
import Login from "../Login"
import Signin from "../Signin/Signin"
import FavorList from "../FavorList"

import TextField from "react-md/lib/TextFields"
import FontIcon from "react-md/lib/FontIcons"

import "./App.scss"

const actions = [
  <Button className="login-btn" key="login" raised primary label="Login" />
]

const nav = <Button key="nav" icon>menu</Button>

const App = () => (
  <app>
    <Toolbar
      zDepth={1}
      colored
      title={
        <h2>
          Una<span>Gauchada</span>
        </h2>
      }
      actions={actions}
      nav={nav}
    >
      <caption>Explorar</caption>
      <TextField
        id="iconLeftPhone"
        block
        placeholder="Buscar"
        leftIcon={<FontIcon>search</FontIcon>}
        size={10}
        className="md-title--toolbar md-cell--middle toolbar-text"
        inputClassName="md-text-field--toolbar"
      />
    </Toolbar>
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
