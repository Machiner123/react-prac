import { addBlogAC } from "../../actionCreators"
import { blogsReducer } from "../../reducers/blogs"

describe("blogs reducer", () => {
  it("returns initial state if type unregistered", () => {
    expect(blogsReducer(undefined, { type: "@@INIT" })).toEqual({ blogs: [] })
  })

  it("replaces default state with new object on ADD_BLOG", () => {
    expect(blogsReducer(undefined, addBlogAC("TEST USER", "TEST TEXT"))).toEqual({
      blogs: [
        {
          user: "TEST USER",
          text: "TEST TEXT"
        }
      ]
    })
  //   expect(blogsReducer({
  //     user: "TEST USER",
  //     text: "TEST TEXT"
  //   },
  // addBlogAC("Igor", "Bananas are the funniest fruit"))).toEqual()
  //
  })
})
