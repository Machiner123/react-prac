import React from 'react'

const Blog = ({user, text}) => {
  return (
    <div>
      <div> {user} </div>
      <div> {text} </div>
    </div>
  )
}

export default Blog
