import React from "react"
import Paper from "react-md/lib/Papers"
import Button from "react-md/lib/Buttons/Button"
import TextField from "react-md/lib/TextFields"
import firebase from "firebase"
import {app} from "../../libs/db.js"

import "./Signin.scss"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "", first: true }
  }

  handleChange = property => value => {
    this.setState({
      [property]: value
    })
  }

  createUser = () => {
      firebase.auth(app).createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => console.error(error))
  }

  render = () => (
    <login>
      <Paper zDepth={2}>
        <header>Ingresar al sistema</header>
        <section>
          <div>
            <TextField
              id="email"
              label="Email"
              fullWidth={true}
              value={this.state.email}
              onChange={this.handleChange("email")}
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Contraseña"
              type="password"
              fullWidth={true}
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </div>
        </section>
        <footer>
          <Button raised label="Aceptar" primary onClick={this.createUser} />
        </footer>
      </Paper>
    </login>
  )
}

export default Login
