import React from "react"
import Blog from "../components/Blog"
import { connect } from "react-redux"

let nextBlog = 0

const Blogs = ({ blogs }) => {
  console.log(blogs)
  return  (
    <div>
      
      {blogs.map(blog => <Blog key={nextBlog++} user={blog.user} text={blog.text} />)}
    </div>
  )
}

const mapStateToProps = ({ blogs }) => ({
  blogs
})

export default connect(mapStateToProps, null)(Blogs)
