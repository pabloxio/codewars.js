const isIsogram = require("./isograms")


test("should validate an isogram", () => {
  const tests = [
    {input: "Dermatoglyphics", want: true},
    {input: "aba", want: false},
    {input: "moOse", want: false},
    {input: "isIsogram", want: false},
    {input: "", want: true}
  ]

  for(t of tests) {
    expect(isIsogram(t.input)).toBe(t.want)
  }
})
