import React, { Component } from "react"
import "./App.css"
import Blogs from "./containers/Blogs"
import SubmitBlog from "./containers/SubmitBlog"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blogs />  
        <SubmitBlog  />
      </div>
    )
  }
}

export default App
