const addBlog = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        user: action.user,
        text: action.text
      }
    default:
      return state
  }
  
}
