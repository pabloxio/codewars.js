const highAndLow = require("./high_and_low")

test("should return the highest and lowest numbers", () => {
  const tests = [
    {numbers: "1 2 3 4 5", want: "5 1"},
    {numbers: "1 2 -3 4 5", want: "5 -3"},
    {numbers: "1 9 3 4 -5", want: "9 -5"}
  ]

  for (const t of tests) {
    expect(highAndLow(t.numbers)).toBe(t.want)
  }
})
