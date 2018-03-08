const addBlogAC = (user, text) => ({
  type: "ADD_BLOG",
  user,
  text
})

module.exports = {
  addBlogAC: addBlogAC
}
