import { addBlogAC } from '../actionCreators'

describe("addBlogAC", ()=> {
  it("returns suitable action object", ()=> {
    expect( addBlogAC("Igor", "Thinks cats are just okay")).toEqual({
      type: "ADD_BLOG",
      user: "Igor",
      text: "Thinks cats are just okay"
    })
  })
})
