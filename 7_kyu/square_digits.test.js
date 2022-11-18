const squareDigits = require("./square_digits")

test("square every digit of a number and concatenate them", () => {
  const tests = [
    {number: 3212, want: 9414},
    {number: 2112, want: 4114},
    {number: 0, want: 0}
  ]

  for (const t of tests) {
    expect(squareDigits(t.number)).toBe(t.want)
  }
})
