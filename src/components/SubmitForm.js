import React from "react"

const SubmitForm = ({ onClickHandler }) => {
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

          onClickHandler(inputName.value, inputText.value)
          inputName.value = ""
          inputText.value = ""
        }}
      >
        <input
          ref={node => {
            inputName = node
          }}
        />
        <br />

        <textarea
          ref={node => {
            inputText = node
          }}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitForm
