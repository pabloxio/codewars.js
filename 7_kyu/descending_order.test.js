const descendingOrder = require("./descending_order")


test("should rearange the digits to create the highest possible number", () => {
  const tests = [
    {input: 12, output: 21},
    {input: 42145, output: 54421},
    {input: 145263, output: 654321},
    {input: 123456789, output: 987654321}
  ]

  for (const t of tests) {
    expect(descendingOrder(t.input)).toBe(t.output)
  }
})
