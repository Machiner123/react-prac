const blogsReducer = (state={blogs:[{user:'hello', text:'kitty'}]}, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      const { blogs } = state
      const newBlog = {user:action.user, text:action.text}
      return {
        blogs:[...blogs, newBlog]
      }
    default:

      return state
  }
}

module.exports = {
  blogsReducer
}
