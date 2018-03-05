import React from "react"
import Blog from "./Blog"

let nextBlog = 0
const Blogs = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <Blog key={nextBlog++} user={blog.user} text={blog.text} />
      ))}
    </div>
  )
}

export default Blogs
