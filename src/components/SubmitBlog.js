import React from "react"

const SubmitBlog = ({ onBlogSubmit } )=> {
  let inputName, inputText

  return (
    <div>
      <br />
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!inputName.value.trim() && !inputText.value.trim()) {
            return
          }
          onBlogSubmit(inputName.value, inputText.value)
          inputName.value = ""
          inputText.value = ""
        }}
      >
        <input
          ref={node => {
            inputName = node
          }}
        />
        <br/>
        <br/>
        <textarea
          ref={node => {
            inputText = node
          }}
        />
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitBlog
