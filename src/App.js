import React, { Component } from "react"
import "./App.css"
import Blogs from "./components/Blogs"
import SubmitBlog from "./components/SubmitBlog"

class App extends Component {
  constructor() {
    super()
    this.state = {
      blogs: [
        {
          user: "Iggles",
          text: "Hi my fave animal is cats"
        }
      ]
    }
  }

  onBlogSubmit = (user, text) => {
    const { blogs } = this.state
    const blgArr = [...blogs, { user, text }]
    this.setState({ blogs: blgArr })
  }
  render() {
    return (
      <div className="App">
        <Blogs blogs={this.state.blogs} />
        <SubmitBlog onBlogSubmit={this.onBlogSubmit} />
      </div>
    )
  }
}

export default App
