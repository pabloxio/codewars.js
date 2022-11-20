const spinWords = require("./stop_gninnips_my_sdrow")

test("it should spin words", () => {
  expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw")
  expect(spinWords("This is a test")).toBe("This is a test")
  expect(spinWords("This is another test")).toBe("This is rehtona test")
})
