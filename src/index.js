import React from "react"
import ReactDOM from "react-dom"
import WebFont from "webfontloader"
import App from "./components/App"

WebFont.load({
  google: {
    families: ["Roboto", "Material Icons"]
  }
})

ReactDOM.render(<App />, document.getElementById("root"))
