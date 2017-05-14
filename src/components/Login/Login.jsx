import React from "react"
import Paper from 'react-md/lib/Papers';
import Button from "react-md/lib/Buttons/Button"
import TextField from 'react-md/lib/TextFields';

import "./login.scss"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: "", password: "", first: true }
  }

  handleChange = property => event => {
    let nextState = { ...this.state }
    nextState[property] = event.target.value
    this.setState(nextState)
  }

  doLogin = () => null

  render = () => (
    <login>
      <Paper zDepth={2}>
        <header>Ingresar al sistema</header>
        <section>
          <div>
            <TextField
              label="Nombre de Usuario"
              fullWidth={true}
              value={this.state.username}
              onChange={this.handleChange("username")}
            />
          </div>
          <div>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth={true}
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </div>
        </section>
        <footer>
          <Button raised label="Aceptar" primary onTouchTap={this.doLogin} />
        </footer>
      </Paper>
    </login>
  )
}

export default Login
