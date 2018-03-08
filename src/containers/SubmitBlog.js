// import React from "react"
import { addBlogAC } from "../actionCreators"
import SubmitForm from '../components/SubmitForm'
import { connect } from 'react-redux'


    // this.dispatchAB = this.dispatchAB.bind(this)
    // this.store = this.props.store


  // componentDidMount() {
  //   this.unsubscribe = this.store.subscribe(() => this.forceUpdate())
  // }
  //
  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  // dispatchAB(user, text) {
  //   return this.store.dispatch(addBlogAC(user, text))
  // }


const mapDispatchToProps = dispatch => (
  {
    onClickHandler: (user, text) => dispatch(addBlogAC(user, text))
  }
)

export default connect(null, mapDispatchToProps)(SubmitForm)
