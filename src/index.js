import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { blogsReducer } from "./reducers/blogs"
import { createStore } from "redux"
import { Provider } from "react-redux"

const store = createStore(blogsReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
