import React from "react"
import InputText from "react-md/lib/TextFields"

export const TextField = ({ name, label }) => (
  <InputText
    id={name}
    label={label}
    fullWidth={true}
    value={this.state[name]}
    onChange={this.handleChange(email)}
  />
)
