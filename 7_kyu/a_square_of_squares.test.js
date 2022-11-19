const isSquare = require("./a_square_of_squares")

test("should validate a perfect square", () => {
  const tests = [
    {input: -1, want: false},
    {input: 1, want: true},
    {input: 0, want: true},
    {input: 3, want: false},
    {input: 4, want: true},
    {input: 25, want: true},
    {input: 26, want: false}
  ]

  for (const t of tests) {
    expect(isSquare(t.input)).toBe(t.want)
  }
})
