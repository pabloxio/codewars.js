const getMiddle = require("./middle_character")


test("should return the middle character", () => {
  const tests = [
    {input: "test", output: "es"},
    {input: "testing", output: "t"},
    {input: "middle", output: "dd"},
    {input: "A", output: "A"}
  ]

  for (const t of tests) {
    expect(getMiddle(t.input)).toBe(t.output)
  }
})
